import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';
import Head from 'next/head';

const ComunicazionePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [comunicazione, setComunicazione] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchComunicazione = async () => {
        const { data, error } = await supabase
          .from('comunicazioni') // Tabella corretta
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
    <div style={{ fontFamily: "'Titillium Web', sans-serif", padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Head>
        <title>{comunicazione.title} | Comunicazione</title>
        <meta name="description" content={comunicazione.description} />
      </Head>

      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '64px', fontWeight: '400', lineHeight: '72px', marginBottom: '0' }}>
          {comunicazione.title}
        </h1>
        <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)' }}>
          Pubblicata il {new Date(comunicazione.created_at).toLocaleDateString()}
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <img
          src={comunicazione.image_url || '/placeholder.jpg'}
          alt={comunicazione.title}
          style={{ width: '100%', height: '400px', objectFit: 'cover', marginBottom: '20px' }}
        />
        <p style={{ fontSize: '20px', lineHeight: '32px', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>
          {comunicazione.content}
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {comunicazione.tags &&
            comunicazione.tags.split(',').map((tag, idx) => (
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