import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';
import Head from 'next/head';
import Link from 'next/link';

const ComunicazionePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [comunicazione, setComunicazione] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchComunicazione = async () => {
        const { data, error } = await supabase
          .from('comunicazioni')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Errore nel recupero della comunicazione:', error.message);
        } else {
          setComunicazione(data);
        }
        setLoading(false);
      };

      fetchComunicazione();
    }
  }, [slug]);

  if (loading) return <p>Caricamento...</p>;
  if (!comunicazione) return <p>Comunicazione non trovata</p>;

  return (
    <>
      <Head>
        <title>{comunicazione.title} | Comunicazione</title>
        <meta name="description" content={comunicazione.content?.substring(0, 160)} />
      </Head>

      {/* Header */}
      <header
        style={{
          backgroundColor: '#1a4278',
          padding: '10px 0',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: '1000',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            fontFamily: "'Titillium Web', sans-serif",
          }}
        >
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>
            Home
          </Link>
          <Link href="/event" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>
            L'Evento
          </Link>
          <Link href="/service" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>
            Servizi
          </Link>
          <Link href="/infoSection" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>
            Comunicazioni
          </Link>
          <Link href="/streaming" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>
            Streaming
          </Link>
          <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>
            Contattaci
          </Link>
          <Link href="/blog" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: '300' }}>
            Blog
          </Link>
        </nav>
      </header>

      {/* Contenuto */}
      <div
        style={{
          fontFamily: "'Titillium Web', sans-serif",
          marginTop: '80px', // Compensa l'header fisso
          padding: '20px',
          maxWidth: '800px',
          margin: 'auto',
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        {/* Titolo */}
        <header style={{ marginBottom: '20px' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              lineHeight: '1.2',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            {comunicazione.title}
          </h1>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              color: '#777',
            }}
          >
            Pubblicata il {new Date(comunicazione.created_at).toLocaleDateString()}
          </p>
        </header>

        {/* Immagine */}
        {comunicazione.image_url && (
          <img
            src={comunicazione.image_url}
            alt={comunicazione.title}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'cover',
              marginBottom: '20px',
            }}
          />
        )}

        {/* Contenuto */}
        <div
          style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            whiteSpace: 'pre-line',
          }}
          dangerouslySetInnerHTML={{ __html: comunicazione.content }}
        />

        {/* Tag */}
        {comunicazione.tags && (
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {comunicazione.tags.split(',').map((tag, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '0.875rem',
                  color: '#333',
                }}
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Pulsante */}
        <button
          onClick={() => router.push('/infoSection')}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Torna alle Comunicazioni
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 0.875rem;
          }
          button {
            font-size: 0.875rem;
          }
          img {
            max-height: 300px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.75rem;
            margin-top: 20px;
          }
          p {
            font-size: 0.75rem;
          }
          img {
            max-height: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default ComunicazionePage;
