import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';
import Head from 'next/head';

const ComunicazionePage = () => {
  const router = useRouter();
  const { slug } = router.query; // Recupera lo slug dall'URL
  const [newsItem, setNewsItem] = useState(null); // Cambiato il nome della variabile per chiarezza
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchNewsItem = async () => {
        const { data, error } = await supabase
          .from('news') // Nome corretto della tabella: 'news'
          .select('*')
          .eq('slug', slug) // Usa lo slug per la query
          .single(); // Recupera un singolo elemento

        if (error) {
          console.error('Errore nel recupero della news:', error.message);
        } else {
          setNewsItem(data); // Salva i dati recuperati nello stato
          console.log("Dati news recuperati:", data); // Log per verificare il recupero dei dati
        }
        setLoading(false); // Cambia lo stato di caricamento
      };

      fetchNewsItem(); // Chiama la funzione per recuperare i dati
    }
  }, [slug]); // Rerun l'effetto quando cambia lo slug

  if (loading) return <p>Caricamento...</p>; // Mostra un messaggio di caricamento
  if (!newsItem) return <p>News non trovata</p>; // Messaggio nel caso non venga trovata la news

  // Funzione per navigare verso infoSection.js
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
        backgroundColor: '#ffffff', // Sfondo bianco
        color: '#1a1a1a', // Colore del testo come nella versione desktop
        minHeight: '100vh', // Copre l'intera altezza della pagina
      }}
    >
      <Head>
        <title>{newsItem.title} | News</title>
        <meta name="description" content={newsItem.description || 'Descrizione della notizia'} />
      </Head>

      <header style={{ marginBottom: '50px' }}>
        <h1 
          style={{ 
            fontSize: 'clamp(36px, 4vw, 64px)', // Font responsivo anche su desktop
            fontWeight: '400', 
            lineHeight: 'clamp(42px, 5vw, 72px)', 
            marginBottom: '0',
            color: '#1a1a1a' // Colore del testo desktop
          }}
        >
          {newsItem.title}
        </h1>
        <p 
          style={{ 
            fontSize: 'clamp(14px, 2vw, 18px)', // Adattamento del font per mobile e desktop
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
            height: 'auto', // Altezza automatica per mantenere proporzioni
            objectFit: 'cover', 
            marginBottom: '20px' 
          }}
        />
        <div 
          style={{ 
            fontSize: 'clamp(16px, 2vw, 20px)', // Testo adattabile in base al dispositivo
            lineHeight: 'clamp(24px, 3vw, 32px)', 
            color: 'rgb(26, 26, 26)', 
            marginBottom: '20px' 
          }}
          dangerouslySetInnerHTML={{
            __html: newsItem.content.replace(/\n/g, '<br />'), // Sostituisce i "vai a capo" con <br>
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

      {/* Bottone che porta a infoSection */}
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
          marginTop: '20px', // Aggiungo spazio sopra
          textAlign: 'left',  // Allinea il pulsante a sinistra
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
