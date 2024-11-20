import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';
import Head from 'next/head';
import Link from 'next/link';

const ComunicazionePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchNewsItem = async () => {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Errore nel recupero della news:', error.message);
        } else {
          setNewsItem(data);
          console.log('Dati news recuperati:', data);
        }
        setLoading(false);
      };

      fetchNewsItem();
    }
  }, [slug]);

  if (loading) return <p>Caricamento...</p>;
  if (!newsItem) return <p>News non trovata</p>;

  const handleNavigate = () => {
    router.push('/infoSection');
  };

  return (
    <>
      <Head>
        <title>{newsItem.title} | News</title>
        <meta name="description" content={newsItem.description || 'Descrizione della notizia'} />
      </Head>

      {/* Header */}
      <header style={{ backgroundColor: '#1a4278', padding: '10px 0' }}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            fontFamily: "'Titillium Web', sans-serif",
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Home
          </Link>
          <Link
            href="/event"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            L'Evento
          </Link>
          <Link
            href="/service"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Servizi
          </Link>
          <Link
            href="/infoSection"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Comunicazioni
          </Link>
          <Link
            href="/streaming"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Streaming
          </Link>
          <Link
            href="/contact"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Contattaci
          </Link>
          <Link
            href="/blog"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Blog
          </Link>
        </nav>
      </header>

      {/* Contenuto */}
      <div
        style={{
          padding: '40px 20px',
          fontFamily: "'Titillium Web', sans-serif",
          maxWidth: '800px',
          margin: 'auto',
          backgroundColor: '#fff',
          color: '#000',
          marginTop: '60px', // Sposta il contenuto in basso per desktop
        }}
      >
        <header style={{ marginBottom: '50px' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              lineHeight: '1.2',
              marginBottom: '10px',
              color: '#000',
            }}
          >
            {newsItem.title}
          </h1>
          <p
            style={{
              fontSize: '1rem',
              marginBottom: '30px',
              color: '#000',
            }}
          >
            Pubblicata il {new Date(newsItem.created_at).toLocaleDateString()}
          </p>
        </header>

        <section style={{ marginBottom: '30px' }}>
          <img
            src={newsItem.image_url || '/placeholder.jpg'}
            alt={newsItem.title}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              marginBottom: '20px',
            }}
          />
          <div
            style={{
              fontSize: '1rem',
              fontWeight: '300',
              lineHeight: '1.8',
              marginBottom: '20px',
              whiteSpace: 'pre-line',
            }}
            dangerouslySetInnerHTML={{
              __html: newsItem.content.replace(/\n/g, '<br />'),
            }}
          />
        </section>

        <button
          onClick={handleNavigate}
          style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '5px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '20px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#005bb5')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#0070f3')}
        >
          Torna alle News
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
          button {
            font-size: 0.75rem;
            padding: 8px 12px;
          }

          div {
            margin-top: 120px; /* Maggiore margine superiore su mobile */
          }
        }
      `}</style>
    </>
  );
};

export default ComunicazionePage;
