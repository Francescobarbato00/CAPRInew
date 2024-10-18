import React, { useState } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  // Funzione per gestire l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ottieni la sessione attualmente attiva
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user; // Ottieni l'utente dalla sessione

    if (!user) {
      setError('Devi essere registrato per pubblicare un articolo.');
      return;
    }

    const { error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          content,
          author_id: user.id, // Usa l'ID dell'utente autenticato
          status: 'pending',  // Status iniziale "pending" in attesa di approvazione
        },
      ]);

    if (error) {
      console.error('Errore durante la creazione del post:', error.message);
      setError('Errore durante la creazione del post.');
    } else {
      router.push('/blog'); // Reindirizza alla pagina del blog dopo la creazione del post
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: "'Titillium Web', sans-serif", backgroundColor: '#f0f4f7', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '40px', color: '#1a1a1a' }}>
          Scrivi un nuovo articolo
        </h1>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>Titolo</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ 
                width: '100%', 
                padding: '15px', 
                fontSize: '16px', 
                borderRadius: '10px', 
                border: '2px solid #e0e0e0', 
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#0066cc'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>Contenuto</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={{ 
                width: '100%', 
                padding: '15px', 
                fontSize: '16px', 
                borderRadius: '10px', 
                border: '2px solid #e0e0e0', 
                minHeight: '200px', 
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#0066cc'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{error}</p>}

          <button
            type="submit"
            style={{
              backgroundColor: '#0066cc',
              color: 'white',
              padding: '15px',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              transition: 'background-color 0.3s',
              marginBottom: '20px',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#005bb5')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#0066cc')}
          >
            Invia per approvazione
          </button>

          <Link href="/blog" passHref>
            <button
              type="button"
              style={{
                backgroundColor: '#777',
                color: 'white',
                padding: '15px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#777')}
            >
              Torna al Blog
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
