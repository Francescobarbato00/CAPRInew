import React, { useState, useEffect } from 'react';
import { supabase } from '../api/supabaseClient';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState(null);
  const [loadingComments, setLoadingComments] = useState(true);
  const [session, setSession] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  // Recupera l'articolo e i commenti associati
  const fetchPostAndComments = async () => {
    if (id) {
      const { data: post, error: postError } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (postError) {
        console.error('Errore nel recupero del post:', postError);
        return;
      }

      setPost(post);

      // Recupera l'autore del post
      const { data: user, error: userError } = await supabase
        .from('users')
        .select('nome, cognome')
        .eq('id', post.author_id)
        .single();

      if (userError) {
        console.error('Errore nel recupero dell\'autore:', userError);
      } else {
        setAuthor(user);
      }

      // Recupera i commenti
      const { data: comments, error: commentsError } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', id)
        .order('created_at', { ascending: true });

      if (!commentsError) {
        const updatedComments = await Promise.all(
          comments.map(async (comment) => {
            const { data: user, error: userError } = await supabase
              .from('users')
              .select('nome, cognome')
              .eq('id', comment.author_id)
              .single();
            return {
              ...comment,
              user: user || { nome: 'Utente', cognome: 'Sconosciuto' },
            };
          })
        );
        setComments(updatedComments);
        setLoadingComments(false);
      }
    }
  };

  // Recupera la sessione dell'utente
  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setSession(session);
  };

  // Aggiunge un nuovo commento
  const addComment = async (e) => {
    e.preventDefault();

    if (!session) {
      alert('Devi essere loggato per inserire un commento');
      return;
    }

    const user = session.user;
    if (!user) return;

    const { error } = await supabase
      .from('comments')
      .insert({ post_id: id, author_id: user.id, content: newComment });

    if (!error) {
      setNewComment('');
      fetchPostAndComments(); 
    } else {
      console.error("Errore nell'inserimento del commento:", error.message);
    }
  };

  useEffect(() => {
    fetchPostAndComments();
    checkSession();
  }, [id]);

  if (!post) return <p>Caricamento...</p>;

  return (
    <>
      {/* Header */}
      <header style={{ backgroundColor: '#1a4278', padding: '10px 0' }}>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontFamily: "'Titillium Web', sans-serif" }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>Home</Link>
          <Link href="/event" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>L'Evento</Link>
          <Link href="/service" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>Servizi</Link>
          <Link href="/infoSection" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>Comunicazioni</Link>
          <Link href="/streaming" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>Streaming</Link>
          <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>Contattaci</Link>
          <Link href="/blog" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>Blog</Link>
        </nav>
      </header>

      <div style={{ padding: '40px 20px', fontFamily: "'Titillium Web', sans-serif", maxWidth: '800px', margin: 'auto', backgroundColor: '#fff', color: '#000' }}>
        {/* Titolo dell'articolo */}
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '10px',
            color: '#000',
          }}
        >
          {post.title}
        </h1>

        {/* Data, autore e categoria */}
        <div
          style={{
            fontSize: '1rem',
            marginBottom: '30px',
            color: '#000',
          }}
        >
          {new Date(post.created_at).toLocaleDateString()} | di{' '}
          <span style={{ fontWeight: '600', color: 'rgb(51, 102, 204)' }}>
            {author ? `${author.nome} ${author.cognome}` : 'Autore sconosciuto'}
          </span>
          <br />
          <span style={{ fontWeight: '600', color: '#777' }}>
            Categoria: {post.category ? post.category : 'Sconosciuta'}
          </span>
        </div>

        {/* Testo dell'articolo */}
        <p
          style={{
            fontSize: '1rem',
            fontWeight: '300',
            lineHeight: '1.8',
            marginBottom: '40px',
            whiteSpace: 'pre-line',
            color: '#000',
          }}
        >
          {post.content}
        </p>

        {/* Sezione dei commenti */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '20px', color: '#000' }}>Commenti</h3>
          {!session ? (
            <p style={{ fontSize: '1rem', color: '#777', marginBottom: '20px' }}>
              <strong>Per vedere o scrivere commenti</strong>, devi <Link href="/login" style={{ color: '#1a4278' }}>accedere</Link> o <Link href="/register" style={{ color: '#1a4278' }}>registrarti</Link>.
            </p>
          ) : loadingComments ? (
            <p>Caricamento commenti...</p>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                style={{
                  borderBottom: '1px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginBottom: '20px',
                  color: '#000',
                }}
              >
                <p style={{ fontSize: '1rem', marginBottom: '10px', color: '#000' }}>{comment.content}</p>
                <div style={{ fontSize: '0.875rem', color: '#555' }}>
                  <strong>
                    {comment.user ? `${comment.user.nome} ${comment.user.cognome}` : 'Utente Sconosciuto'}
                  </strong>{' '}
                  - {new Date(comment.created_at).toLocaleDateString()} alle{' '}
                  {new Date(comment.created_at).toLocaleTimeString()}
                </div>
              </div>
            ))
          ) : (
            <p style={{ fontSize: '1rem', color: '#777' }}>Non ci sono commenti ancora. Sii il primo a commentare!</p>
          )}

          {session && (
            <form onSubmit={addComment} style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Scrivi un commento"
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '1rem',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  minHeight: '100px',
                  color: '#000',
                }}
                rows="4"
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#1a4278',
                  color: '#fff',
                  padding: '12px 20px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#163a6a')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#1a4278')}
              >
                Invia
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 0.875rem;
          }
          h3 {
            font-size: 1.5rem;
          }
          button {
            font-size: 0.875rem;
            padding: 10px 15px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.75rem;
          }
          p {
            font-size: 0.75rem;
          }
          h3 {
            font-size: 1.25rem;
          }
          button {
            font-size: 0.75rem;
            padding: 8px 12px;
          }

          /* Versione mobile: sfondo bianco, testo nero */
          div, header, textarea, button {
            background-color: #fff;
            color: #000;
          }

          /* Autore rimane con il colore diverso */
          span {
            color: rgb(51, 102, 204);
          }
        }
      `}</style>
    </>
  );
};

export default PostDetail;
