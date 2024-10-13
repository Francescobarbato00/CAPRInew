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
        }
        setLoading(false); // Cambia lo stato di caricamento
      };

      fetchNewsItem(); // Chiama la funzione per recuperare i dati
    }
  }, [slug]); // Rerun l'effetto quando cambia lo slug

  if (loading) return <p>Caricamento...</p>; // Mostra un messaggio di caricamento
  if (!newsItem) return <p>News non trovata</p>; // Messaggio nel caso non venga trovata la news

  return (
    <div style={{ fontFamily: "'Titillium Web', sans-serif", padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Head>
        <title>{newsItem.title} | News</title>
        <meta name="description" content={newsItem.description || 'Descrizione della notizia'} />
      </Head>

      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '64px', fontWeight: '400', lineHeight: '72px', marginBottom: '0' }}>
          {newsItem.title}
        </h1>
        <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)' }}>
          Pubblicata il {new Date(newsItem.created_at).toLocaleDateString()}
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <img
          src={newsItem.image_url || '/placeholder.jpg'}
          alt={newsItem.title}
          style={{ width: '100%', height: '400px', objectFit: 'cover', marginBottom: '20px' }}
        />
        <p style={{ fontSize: '20px', lineHeight: '32px', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>
          {newsItem.content}
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
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
    </div>
  );
};

export default ComunicazionePage;
