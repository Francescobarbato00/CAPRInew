import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './api/supabaseClient';
import Head from 'next/head';

export default function Admin() {
  const [userRole, setUserRole] = useState(''); // Stato per il ruolo dell'utente
  const [loading, setLoading] = useState(true); // Stato di caricamento
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

  // Effettua il check quando la pagina viene caricata
  useEffect(() => {
    checkAdmin();
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

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 gap-6">
            {/* Bottone per andare alla pagina add-news */}
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
