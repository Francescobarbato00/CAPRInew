import React from 'react';
import Head from 'next/head';

const SezioneStreamingMateriali = () => {
  return (
    <>
      <Head>
        <title>Sezione Streaming e Materiali</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container" style={{ backgroundColor: '#fff', fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif" }}>
        <div className="row" style={{ display: 'flex', marginTop: '30px', flexWrap: 'wrap' }}>
          {/* Colonna Indice */}
          <div className="colonna-indice" style={{ flex: '1 1 100%', paddingRight: '20px', paddingLeft: '40px', marginBottom: '20px', borderRight: '1px solid #ccc' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#000', lineHeight: 'normal' }}>INDICE DELLA PAGINA</h2>
            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
              <li style={{ marginBottom: '20px' }}>
                <a href="#webinar" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Webinar</a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#registrazioni2024" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Registrazioni 2024</a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#registrazioni2023" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Registrazioni 2023</a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#interventiVideo" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Interventi Video Registrati</a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#materiali" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Materiali</a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="#locandine" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Locandine</a>
              </li>
            </ul>
          </div>

          {/* Colonna Contenuto */}
          <div className="colonna-contenuto" style={{ flex: '1 1 100%', padding: '20px' }}>
            <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#000', lineHeight: 'normal' }}>Sezione Streaming e Materiali</h1>
            <p style={{ fontSize: '20px', fontWeight: '300', color: '#000', lineHeight: '28px' }}>
              In questa sezione troverai tutti i collegamenti ai webinar, ai video registrati, e i materiali dell'evento. Potrai accedere alle registrazioni delle edizioni passate, scaricare locandine, e consultare documenti utili per la tua partecipazione.
            </p>

            <section id="webinar" style={{ marginTop: '40px', marginBottom: '100px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>Webinar Disponibili</h2>
              <p style={{ fontSize: '18px', fontWeight: '300', color: '#000', lineHeight: '28px' }}>
                Partecipa ai nostri webinar nel caso in cui non possa essere presente a Capri. Scegli un webinar e clicca per partecipare!
              </p>

              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '20px' }}>
                  <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    Questioni di diritto e processo del lavoro, nell’era della rivoluzione tecnologica <br />
                    Venerdì 4 ottobre 2024 - 14:30 - 18:00
                  </a>
                </li>
                <li style={{ marginBottom: '20px' }}>
                  <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    La Giustizia moderna alla luce dei Regolamenti adottati dall’UE nel Decennio Digitale <br />
                    Sabato 5 ottobre 2024 - 08:45 - 13:30
                  </a>
                </li>
              </ul>
            </section>

            <section id="registrazioni2024" style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>Registrazioni 2024</h2>
              <p style={{ fontSize: '18px', fontWeight: '300', color: '#000', lineHeight: '28px' }}>
                Appena il settore informatico avrà editato i video dell'edizione 2024 saranno disponibili qui.
              </p>
            </section>

            <section id="registrazioni2023" style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>Registrazioni 2023</h2>
              <p style={{ fontSize: '18px', fontWeight: '300', color: '#000', lineHeight: '28px' }}>
                Ecco le registrazioni degli eventi del 2023:
              </p>
              
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px' }}>
                  <a href="https://youtu.be/g2Ebj1B1GD8" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    Capri 13 ottobre 2023 - Sala Pollio
                  </a>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <a href="https://youtu.be/qa89hs8aRHI" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    Capri 14 ottobre 2023 - Certosa plenaria
                  </a>
                </li>
              </ul>
            </section>

            <section id="interventiVideo" style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>Interventi Video Registrati</h2>
              <p style={{ fontSize: '18px', fontWeight: '300', color: '#000', lineHeight: '28px' }}>
                Ecco i video degli interventi registrati durante l'evento:
              </p>
              
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px' }}>
                  <a href="https://youtu.be/1Ac-ynp7QEs" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    Presidente della Camera Avvocati Tributaristi di Napoli: "Intervento Capri"
                  </a>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <a href="https://youtu.be/J0bCufBj2BA" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    "La Global Governance per l'informatica giudiziaria"
                  </a>
                </li>
              </ul>
            </section>

            <section id="materiali" style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>Materiali</h2>
              <p style={{ fontSize: '18px', fontWeight: '300', color: '#000', lineHeight: '28px' }}>
                Una volta ricevuti i materiali didattici da parte dei Docenti, verranno caricati in questa sezione.
              </p>
            </section>

            <section id="locandine" style={{ marginTop: '40px', marginBottom: '100px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>Locandine</h2>
              <p style={{ fontSize: '18px', fontWeight: '300', color: '#000', lineHeight: '28px' }}>
                Qui puoi scaricare le locandine degli eventi:
              </p>
              
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px' }}>
                  <a href="/4.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    Locandina del 4 Ottobre 2024
                  </a>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <a href="/5.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                    Locandina del 5 Ottobre 2024
                  </a>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .row {
            flex-direction: column;
          }

          .colonna-indice {
            width: 100%;
            padding-left: 20px;
            border-right: none;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
          }

          .colonna-contenuto {
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
          }

          h1 {
            font-size: 32px;
          }

          h2 {
            font-size: 20px;
          }

          p, a {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 28px;
          }

          h2 {
            font-size: 18px;
          }

          p, a {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default SezioneStreamingMateriali;
