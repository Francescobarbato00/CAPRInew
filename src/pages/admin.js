import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './api/supabaseClient';
import Head from 'next/head';

export default function Admin() {
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [pendingPosts, setPendingPosts] = useState([]); // Stato per i post in attesa di approvazione
  const router = useRouter();

  // Funzione per controllare il ruolo dell'utente
  const checkAdmin = async () => {
    try {
      const { data, error: sessionError } = await supabase.auth.getSession();
      console.log('Sessione corrente:', data?.session);

      if (sessionError || !data?.session) {
        console.error('Errore nel recupero della sessione:', sessionError);
        router.push('/login');
        return;
      }

      const userId = data.session.user.id;
      console.log('ID utente:', userId);

      // Recupera il ruolo dell'utente dal database
      const { data: userData, error: roleError } = await supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .single();

      if (roleError) {
        console.error('Errore nel recupero del ruolo:', roleError);
        router.push('/login');
        return;
      }

      console.log('Ruolo utente recuperato:', userData?.role);

      if (userData?.role === 'admin') {
        setUserRole('admin');
      } else {
        console.warn('L\'utente non è admin:', userData?.role);
        router.push('/');
      }
    } catch (error) {
      console.error('Errore nella verifica dell\'utente:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  // Funzione per recuperare i post in attesa di approvazione
  const fetchPendingPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('status', 'pending');  // Recupera solo i post in attesa di approvazione

    if (error) {
      console.error('Errore nel recupero dei post in attesa:', error.message);
    } else {
      setPendingPosts(data);
    }
  };

  // Funzione per approvare un post
  const approvePost = async (postId) => {
    const { error } = await supabase
      .from('posts')
      .update({ status: 'approved' })
      .eq('id', postId);

    if (error) {
      console.error('Errore durante l\'approvazione del post:', error.message);
    } else {
      fetchPendingPosts(); // Aggiorna la lista dei post dopo l'approvazione
    }
  };

  // Funzione per rifiutare un post
  const rejectPost = async (postId) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId);

    if (error) {
      console.error('Errore durante il rifiuto del post:', error.message);
    } else {
      fetchPendingPosts(); // Aggiorna la lista dei post dopo il rifiuto
    }
  };

  // Esegui il check del ruolo dell'utente e recupera i post in attesa di approvazione
  useEffect(() => {
    checkAdmin();
    fetchPendingPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Caricamento...</p>
      </div>
    );
  }

  if (userRole !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Non sei autorizzato ad accedere a questa pagina.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-100 p-8" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">Pannello di Amministrazione</h1>

        {/* Sezione per i post in attesa di approvazione */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Post in attesa di approvazione</h2>
          {pendingPosts.length === 0 ? (
            <p>Non ci sono post in attesa di approvazione.</p>
          ) : (
            pendingPosts.map((post) => (
              <div key={post.id} className="border-b pb-4 mb-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-500">Autore: {post.author_id}</p>
                <p>{post.content.substring(0, 100)}...</p>

                <div className="flex justify-between mt-4">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    onClick={() => approvePost(post.id)}
                  >
                    Approva
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                    onClick={() => rejectPost(post.id)}
                  >
                    Rifiuta
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Altri pulsanti di gestione */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
          <div className="grid grid-cols-1 gap-6">
            {/* Bottone per aggiungere news */}
            <button
              className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              onClick={() => router.push('/add-news')}
            >
              Aggiungi Nuova Notizia
            </button>

            {/* Bottone per aggiungere comunicazione */}
            <button
              className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              onClick={() => router.push('/AddComunicazione')}
            >
              Aggiungi Comunicazione
            </button>

            {/* Gestione degli utenti */}
            <button
              className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              onClick={() => router.push('/manage-users')}
            >
              Gestisci Utenti
            </button>

            {/* Bottone per tornare all'index */}
            <button
              className="w-full bg-gray-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-all duration-300 mt-6"
              onClick={() => router.push('/')}
            >
              Torna alla Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
