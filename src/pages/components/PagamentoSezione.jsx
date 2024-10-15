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

      <div style={{ display: 'flex', justifyContent: 'center', padding: '30px', fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif" }}>
        <div style={{ width: '80%', maxWidth: '1200px' }}>
          {/* Titolo della pagina */}
          <h1 style={{ fontSize: '48px', fontWeight: '700', color: 'rgb(26, 26, 26)', textAlign: 'center', marginBottom: '40px' }}>
            Pagamento Cena Evento
          </h1>
          <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px', textAlign: 'center', marginBottom: '60px' }}>
            Qui puoi pagare la cena per il nostro evento utilizzando il pagamento elettronico. Il prezzo è fisso per ogni partecipante. Segui le istruzioni e utilizza l'IBAN fornito per completare il pagamento.
          </p>

          {/* Lista degli articoli */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
            {/* Articolo singolo */}
            <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>Cena Evento</h2>
              <p style={{ fontSize: '16px', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante "La Dolce Vita" per l'evento speciale.
              </p>
              <p style={{ fontSize: '18px', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>Prezzo: €50 a persona</p>

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
                  textAlign: 'center', 
                  transition: 'background-color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>

            <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>Cena Evento</h2>
              <p style={{ fontSize: '16px', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante "La Dolce Vita" per l'evento speciale.
              </p>
              <p style={{ fontSize: '18px', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>Prezzo: €50 a persona</p>

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
                  textAlign: 'center', 
                  transition: 'background-color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>
            <div style={{ width: 'calc(33.33% - 20px)', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>Cena Evento</h2>
              <p style={{ fontSize: '16px', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante "La Dolce Vita" per l'evento speciale.
              </p>
              <p style={{ fontSize: '18px', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>Prezzo: €50 a persona</p>

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
                  textAlign: 'center', 
                  transition: 'background-color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>


            {/* Altri articoli simili possono essere aggiunti con lo stesso layout */}
          </div>

          {/* Sezione informazioni sul pagamento */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Istruzioni per il pagamento</h3>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px', marginBottom: '20px' }}>
              Effettua il pagamento tramite bonifico bancario al seguente IBAN:
            </p>
            <p style={{ fontSize: '22px', fontWeight: '600', color: 'rgb(0, 102, 204)' }}>{iban}</p>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px', marginTop: '20px' }}>
              Indica nella causale: <strong>Pagamento Cena Evento</strong> e specifica il nome dei partecipanti. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagamentoSezione;
