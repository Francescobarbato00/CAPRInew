import React from 'react';
import Head from 'next/head';

const PagamentoSezione = () => {
  const iban = "IT60X0542811101000000123456"; // Esempio di IBAN fisso

  return (
    <>
      <Head>
        <title>Pagamento Cena - Evento Digitale</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '30px', fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif", backgroundColor: '#ffffff', color: '#000000' }}>
        <div style={{ width: '90%', maxWidth: '1200px' }}>
          {/* Titolo della pagina */}
          <h1 style={{ fontSize: '3rem', fontWeight: '700', color: 'rgb(26, 26, 26)', textAlign: 'center', marginBottom: '40px' }}>
            Pagamento Cena Evento
          </h1>
          <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '1.5', textAlign: 'center', marginBottom: '60px' }}>
            Qui puoi pagare la cena per il nostro evento utilizzando il pagamento elettronico. Il prezzo è fisso per ogni partecipante. Segui le istruzioni e utilizza l'IBAN fornito per completare il pagamento.
          </p>

          {/* Lista degli articoli */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
            {/* Articolo singolo */}
            <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>Cena Evento</h2>
              <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante "La Dolce Vita" per l'evento speciale.
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>Prezzo: €50 a persona</p>

              {/* Pulsante Paga */}
              <a href={`mailto:info@example.com?subject=Pagamento Cena&body=Ecco i dettagli del pagamento:\n\nIBAN: ${iban}\nImporto: 50€\n\nGrazie per aver partecipato all'evento!`}
                style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  backgroundColor: 'rgb(0, 102, 204)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>
            <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>Cena Evento</h2>
              <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante "La Dolce Vita" per l'evento speciale.
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>Prezzo: €50 a persona</p>

              {/* Pulsante Paga */}
              <a href={`mailto:info@example.com?subject=Pagamento Cena&body=Ecco i dettagli del pagamento:\n\nIBAN: ${iban}\nImporto: 50€\n\nGrazie per aver partecipato all'evento!`}
                style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  backgroundColor: 'rgb(0, 102, 204)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>
            <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>Cena Evento</h2>
              <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante "La Dolce Vita" per l'evento speciale.
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>Prezzo: €50 a persona</p>

              {/* Pulsante Paga */}
              <a href={`mailto:info@example.com?subject=Pagamento Cena&body=Ecco i dettagli del pagamento:\n\nIBAN: ${iban}\nImporto: 50€\n\nGrazie per aver partecipato all'evento!`}
                style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  backgroundColor: 'rgb(0, 102, 204)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>

            {/* Ripeti il blocco per altre card */}
          </div>

          {/* Sezione informazioni sul pagamento */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Istruzioni per il pagamento</h3>
            <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '1.5', marginBottom: '20px' }}>
              Effettua il pagamento tramite bonifico bancario al seguente IBAN:
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(0, 102, 204)' }}>{iban}</p>
            <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '1.5', marginTop: '20px' }}>
              Indica nella causale: <strong>Pagamento Cena Evento</strong> e specifica il nome dei partecipanti. Grazie per aver partecipato!
            </p>
          </div>
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

          div[style*='calc(33.33%'] {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.75rem;
          }

          h2 {
            font-size: 1.25rem;
          }

          p {
            font-size: 0.75rem;
          }

          div[style*='calc(33.33%'] {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default PagamentoSezione;
