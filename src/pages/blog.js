import React, { useState, useEffect } from 'react';
import { supabase } from './api/supabaseClient';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useRouter } from 'next/router';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null); // Stato per l'utente loggato
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // Funzione per controllare la sessione dell'utente
  const checkUserSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setUser(session?.user || null);
  };

  // Funzione per recuperare i post approvati dal database
  const fetchPosts = async () => {
    const { data: posts, error: postError } = await supabase
      .from('posts')
      .select('*')
      .eq('status', 'approved');  // Recupera solo i post approvati

    if (postError) {
      console.error('Errore nel recupero degli articoli:', postError.message);
    } else {
      // Per ogni post, recupera il nome e il cognome dell'autore
      const postsWithAuthors = await Promise.all(
        posts.map(async (post) => {
          const { data: author, error: authorError } = await supabase
            .from('users')
            .select('nome, cognome')
            .eq('id', post.author_id)
            .single();
          return {
            ...post,
            author: author || { nome: 'Autore', cognome: 'Sconosciuto' }, // Se non si trova l'autore, usa un nome predefinito
          };
        })
      );
      setPosts(postsWithAuthors);
    }
  };

  // Funzione per gestire il click del tasto "Scrivi un nuovo articolo"
  const handleCreatePostClick = () => {
    if (!user) {
      // Se l'utente non è loggato, mostra un messaggio di errore
      setErrorMessage('Per scrivere un articolo, devi registrarti ed effettuare l\'accesso.');
    } else {
      // Se l'utente è loggato, reindirizzalo alla pagina di creazione del post
      router.push('/create-post');
    }
  };

  // Esegui il check della sessione dell'utente e il fetch degli articoli al caricamento del componente
  useEffect(() => {
    checkUserSession();
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: '50px', fontFamily: "'Titillium Web', sans-serif", backgroundColor: '#f9f9f9' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '300', textAlign: 'left', marginBottom: '30px', color: '#1a1a1a' }}>
          Ultimi Articoli del Blog
        </h1>

        {/* Sezione per mostrare gli articoli */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {posts.length === 0 ? (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '20px', color: '#777' }}>
              Nessun articolo disponibile.
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s',
                  padding: '20px',
                }}
                className="post-card"
              >
                <div>
                  <h2
                    style={{
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#0066cc',
                      marginBottom: '10px',
                      transition: 'color 0.3s',
                    }}
                  >
                    <Link href={`/post/${post.id}`} legacyBehavior>
                      <a style={{ textDecoration: 'none', color: '#0066cc' }}>{post.title}</a>
                    </Link>
                  </h2>
                  <p style={{ fontSize: '14px', color: '#777', marginBottom: '5px' }}>
                    Pubblicato il: {new Date(post.created_at).toLocaleDateString()}
                  </p>
                  <p style={{ fontSize: '14px', color: '#777', marginBottom: '15px' }}>
                    Autore: {post.author ? `${post.author.nome} ${post.author.cognome}` : 'Autore Sconosciuto'}
                  </p>
                  <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.5', marginBottom: '15px' }}>
                    {post.content.substring(0, 120)}...
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link href={`/post/${post.id}`} legacyBehavior>
                    <a
                      style={{
                        color: '#0066cc',
                        fontWeight: '600',
                        fontSize: '16px',
                        textDecoration: 'none',
                      }}
                    >
                      Leggi di più
                    </a>
                  </Link>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#777' }}>Condividi</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Messaggio di errore se l'utente non è autenticato */}
        {errorMessage && (
          <div style={{ marginTop: '20px', color: 'red', textAlign: 'center', fontSize: '16px' }}>
            {errorMessage}
          </div>
        )}

        {/* Link per inserire un nuovo articolo (solo se l'utente è registrato) */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <button
            onClick={handleCreatePostClick}
            style={{
              backgroundColor: '#1a4278',  // Blu scuro
              color: '#fff',
              padding: '12px 30px',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#163a6a')}  // Colore più scuro per l'hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#1a4278')}  // Colore originale quando si lascia l'hover
          >
            Scrivi un nuovo articolo
          </button>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Blog;
