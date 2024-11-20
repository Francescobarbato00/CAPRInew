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
    <div
      style={{
        fontFamily: "'Titillium Web', sans-serif",
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Head>
        <title>{comunicazione.title} | Comunicazione</title>
        <meta name="description" content={comunicazione.content?.substring(0, 160)} />
      </Head>

      {/* Header */}
      <header
        style={{
          backgroundColor: '#1a4278',
          padding: '10px 0',
          width: '100%',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '1000',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Aggiunge una leggera ombra
        }}
      >
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
          <a
            href="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Home
          </a>
          <a
            href="/event"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            L'Evento
          </a>
          <a
            href="/service"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Servizi
          </a>
          <a
            href="/infoSection"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Comunicazioni
          </a>
          <a
            href="/streaming"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Streaming
          </a>
          <a
            href="/contact"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Contattaci
          </a>
          <a
            href="/blog"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Blog
          </a>
        </nav>
      </header>

      {/* Contenuto */}
      <div
        style={{
          marginTop: '80px', // Compensa l'altezza dell'header
        }}
      >
        <header style={{ marginBottom: '50px' }}>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '400',
              lineHeight: '56px',
              marginBottom: '0',
              textAlign: 'center',
              color: '#000',
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
          }}
        >
          Torna alle Comunicazioni
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 36px;
            line-height: 42px;
          }
          p {
            font-size: 14px;
            line-height: 22px;
          }
          div {
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
            margin-top: 100px; /* Sposta il titolo in basso per evitare sovrapposizioni */
          }
          p {
            font-size: 12px;
            line-height: 18px;
          }
          div {
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
