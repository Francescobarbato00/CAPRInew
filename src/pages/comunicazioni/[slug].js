import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';
import Head from 'next/head';

const ComunicazionePage = () => {
  const router = useRouter();
  const { slug } = router.query; // Recupera lo slug dalla URL
  const [comunicazione, setComunicazione] = useState(null); // Stato per i dati della comunicazione
  const [loading, setLoading] = useState(true); // Stato di caricamento

  // Effettua una chiamata al database per recuperare i dati della comunicazione tramite lo slug
  useEffect(() => {
    if (slug) {
      const fetchComunicazione = async () => {
        const { data, error } = await supabase
          .from('comunicazioni') // Assicurati che questa sia la tabella corretta
          .select('*')
          .eq('slug', slug) // Filtra la comunicazione in base allo slug
          .single(); // Ritorna un singolo record

        if (error) {
          console.error('Errore nel recupero della comunicazione:', error.message);
        } else {
          setComunicazione(data); // Imposta i dati della comunicazione nel relativo stato
        }
        setLoading(false); // Fine caricamento
      };

      fetchComunicazione();
    }
  }, [slug]);

  // Visualizzazione durante il caricamento
  if (loading) return <p>Caricamento...</p>;

  // Visualizzazione se la comunicazione non è trovata
  if (!comunicazione) return <p>Comunicazione non trovata</p>;

  return (
    <div style={{ fontFamily: "'Titillium Web', sans-serif", padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Head>
        <title>{comunicazione.title} | Comunicazione</title>
        <meta name="description" content={comunicazione.content?.substring(0, 160)} />
      </Head>

      <header style={{ marginBottom: '50px' }}>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: '400',
            lineHeight: '56px',
            marginBottom: '0',
            textAlign: 'center',
          }}
        >
          {comunicazione.title}
        </h1>
        <p
          style={{
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            color: 'rgb(26, 26, 26)',
            textAlign: 'center',
          }}
        >
          Pubblicata il {new Date(comunicazione.created_at).toLocaleDateString()}
        </p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <img
          src={comunicazione.image_url || '/placeholder.jpg'} // Mostra immagine o un segnaposto
          alt={comunicazione.title}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
            marginBottom: '20px',
          }}
        />
        <div
          style={{
            fontSize: '18px',
            lineHeight: '30px',
            color: 'rgb(26, 26, 26)',
            marginBottom: '20px',
          }}
          dangerouslySetInnerHTML={{
            __html: comunicazione.content.replace(/\n/g, '<br />'), // Gestione dei "vai a capo"
          }}
        />
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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

      <button
        onClick={() => router.push('/infoSection')}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          marginTop: '20px',
          textAlign: 'left', // Allinea a sinistra
        }}
      >
        Torna alle Comunicazioni
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            background-color: white;  // Sfondo bianco su mobile
            color: black;  // Testo nero su mobile
          }
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
          div {
            background-color: white;  // Sfondo bianco su mobile
            color: black;  // Testo nero su mobile
          }
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
