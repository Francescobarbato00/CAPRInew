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
          console.log("Dati news recuperati:", data);
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
    <div 
      style={{ 
        fontFamily: "'Titillium Web', sans-serif", 
        padding: '20px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: '#ffffff',
        color: '#1a1a1a',
        minHeight: '100vh',
      }}
    >
      <Head>
        <title>{newsItem.title} | News</title>
        <meta name="description" content={newsItem.description || 'Descrizione della notizia'} />
      </Head>

      {/* Header */}
      <header style={{ backgroundColor: '#1a4278', padding: '10px 0', marginBottom: '50px', width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
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


      <header style={{ marginBottom: '50px' }}>
        <h1 
          style={{ 
            fontSize: 'clamp(36px, 4vw, 64px)',
            fontWeight: '400', 
            lineHeight: 'clamp(42px, 5vw, 72px)', 
            marginBottom: '0',
            color: '#1a1a1a'
          }}
        >
          {newsItem.title}
        </h1>
        <p 
          style={{ 
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontWeight: '400', 
            lineHeight: '28px', 
            color: 'rgb(26, 26, 26)' 
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
            marginBottom: '20px' 
          }}
        />
        <div 
          style={{ 
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 'clamp(24px, 3vw, 32px)', 
            color: 'rgb(26, 26, 26)', 
            marginBottom: '20px' 
          }}
          dangerouslySetInnerHTML={{
            __html: newsItem.content.replace(/\n/g, '<br />'),
          }}
        />
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {newsItem.tags &&
            newsItem.tags.split(',').map((tag, idx) => (
              <span
                key={idx}
                style={{
                  background: '#e0e0e0',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                }}
              >
                {tag.trim()}
              </span>
            ))}
        </div>
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
          textAlign: 'left',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#005bb5')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#0070f3')}
      >
        Torna alle News
      </button>

      <style jsx>{`
        @media (min-width: 1024px) {
          h1 {
            font-size: 48px;
            line-height: 60px;
          }
          p {
            font-size: 16px;
            line-height: 24px;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px;
            line-height: 42px;
          }
          p {
            font-size: 14px;
            line-height: 22px;
          }
          div[style*='padding: 20px'] {
            padding: 15px;
          }
          img {
            max-height: 300px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 28px;
            line-height: 36px;
          }
          p {
            font-size: 12px;
            line-height: 18px;
          }
          div[style*='padding: 20px'] {
            padding: 10px;
          }
          img {
            max-height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default ComunicazionePage;
