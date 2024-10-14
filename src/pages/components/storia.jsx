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

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px', fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif" }}>
        {/* Colonna Indice con spazio bianco a sinistra */}
        <div className="colonna-indice" style={{ width: '20%', paddingRight: '20px', paddingLeft: '40px', borderRight: '1px solid #ccc', marginRight: '40px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'rgb(0, 102, 204)', lineHeight: 'normal' }}>INDICE DELLA PAGINA</h2>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
            <li style={{ marginBottom: '20px' }}>
              <a href="#webinar" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Webinar</a>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <a href="#registrazioni2024" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Registrazioni 2024</a>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <a href="#registrazioni2023" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Registrazioni 2023</a>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <a href="#interventiVideo" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Interventi Video Registrati</a>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <a href="#materiali" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Materiali</a>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <a href="#locandine" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>Locandine</a>
            </li>
          </ul>
        </div>

        {/* Colonna Contenuto */}
        <div className="colonna-contenuto" style={{ width: '70%', paddingLeft: '20px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', color: 'rgb(26, 26, 26)', lineHeight: 'normal' }}>Sezione Streaming e Materiali</h1>
          <p style={{ fontSize: '20px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
            In questa sezione troverai tutti i collegamenti ai webinar, ai video registrati, e i materiali dell'evento. Potrai accedere alle registrazioni delle edizioni passate, scaricare locandine, e consultare documenti utili per la tua partecipazione.
          </p>

          <section id="webinar" style={{ marginTop: '40px', marginBottom: '100px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Webinar Disponibili</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Partecipa ai nostri webinar nel caso in cui non possa essere presente a Capri. Scegli un webinar e clicca per partecipare!
            </p>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '20px' }}>
                <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTdjYzY2NjctY2ZlMi00Y2E3LWFlOGQtZTRiNGMwNmVlZjI4%40thread.v2/0?context=%7B%22Tid%22%3A%2243ea8a99-c6ed-4a82-b447-d69d06583d87%22%2C%22Oid%22%3A%2275a497e9-fe5d-4c97-9f64-22a2441eb7e1%22%2C%22IsBroadcastMeeting%22%3Atrue%2C%22role%22%3A%22a%22%7D&btype=a&role=a" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Questioni di diritto e processo del lavoro, nell’era della rivoluzione tecnologica <br />
                  Venerdì 4 ottobre 2024 - 14:30 - 18:00
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_M2Y2NDY1ZWUtNGY3Ni00ZmEwLTkzZjMtMTc4NDkzZTUzMmVj%40thread.v2/0?context=%7B%22Tid%22%3A%2243ea8a99-c6ed-4a82-b447-d69d06583d87%22%2C%22Oid%22%3A%2275a497e9-fe5d-4c97-9f64-22a2441eb7e1%22%2C%22IsBroadcastMeeting%22%3Atrue%2C%22role%22%3A%22a%22%7D&btype=a&role=a" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  La Giustizia moderna alla luce dei Regolamenti adottati dall’UE nel Decennio Digitale <br />
                  Sabato 5 ottobre 2024 - 08:45 - 13:30
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjVhNjU5MDMtMmYwOS00N2ViLTg1MTUtNDY5NzQwNzc5OGZm%40thread.v2/0?context=%7B%22Tid%22%3A%2243ea8a99-c6ed-4a82-b447-d69d06583d87%22%2C%22Oid%22%3A%2275a497e9-fe5d-4c97-9f64-22a2441eb7e1%22%2C%22IsBroadcastMeeting%22%3Atrue%2C%22role%22%3A%22a%22%7D&btype=a&role=a" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Gruppo 1 - L’innovazione e la digitalizzazione nel diritto e processo civile <br />
                  Sabato 5 ottobre 2024 - 14:45 - 17:30
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NGY2M2E1NDgtNjIwYi00MGFmLTkxMDItYTIxMjNhNDc1MmUx%40thread.v2/0?context=%7b%22Tid%22%3a%2243ea8a99-c6ed-4a82-b447-d69d06583d87%22%2c%22Oid%22%3a%2275a497e9-fe5d-4c97-9f64-22a2441eb7e1%22%7d" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  GRUPPO 3: Processo Telematico ed Intelligenza Artificiale: Rischi e Opportunità per la Giustizia Tributaria <br />
                  Sabato 5 ottobre 2024 - 14:45 - 17:30
                </a>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <span style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  GRUPPO 5: Europe’s Digital Decade (La digitalizzazione in Europa) <br />
                  Sabato 5 ottobre 2024 - 14:45 - 17:30 ( Gruppo Privato )
                </span>
              </li>
            </ul>
          </section>

          <section id="registrazioni2024" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Registrazioni 2024</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Appena il settore informatico avrà editato i video dell'edizione 2024 saranno disponibili qui.
            </p>
          </section>

          <section id="registrazioni2023" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Registrazioni 2023</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Ecco le registrazioni degli eventi del 2023:
            </p>
            
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/g2Ebj1B1GD8?si=lUCLFJdGWYvsuFfJ" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Capri 13 ottobre 2023 - Sala Pollio
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/qa89hs8aRHI?si=CJchAU5onjgKXnYX" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Capri 14 ottobre 2023 - Certosa plenaria
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/RsaW7YqeaYk?si=Jhb2DqSsb0ZFj3A3" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Capri 14 ottobre 2023 - Gruppo civile
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/jLwu33aPEyc?si=y92Zf42gPtzZ5UII" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Capri 14 ottobre 2023 - Gruppo penale
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/qCvOuyjFiLE?si=XcsdSQp7HG4vyM8" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Capri 14 ottobre 2023 - Gruppo Giustizia Tributaria
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/ZxIpP4vX-VI?si=3DKxuEIzCU0fFCDv" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Capri 14 ottobre 2023 - Gruppo Intermagistratura
                </a>
              </li>
            </ul>
          </section>

          <section id="interventiVideo" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Interventi Video Registrati</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Ecco i video degli interventi registrati durante l'evento:
            </p>
            
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/1Ac-ynp7QEs" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Presidente della Camera Avvocati Tributaristi di Napoli: "Intervento Capri" <br /> Relatore: Avv. Michele Di Fiore
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/J0bCufBj2BA" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  "La Global Governance per l'informatica giudiziaria" <br /> Relatore: Presidente Claudio Castelli
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/tMKqbFWjma4" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  "Le videoregistrazioni del processo penale e il portale delle videoregistrazioni" <br /> Relatore: Dottoressa Fernanda Iannone
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="https://youtu.be/3yFDBehX-dw" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  "Giudici: mente umana o meccanica in difesa dell'uguaglianza?" <br /> Relatore: Giovanna De Minico, prof. Diritto Costituzionale, Univ. Federico II Napoli e Legal chief del partenariato FAIR.
                </a>
              </li>
            </ul>
          </section>

          <section id="materiali" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Materiali</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Una volta ricevuti i materiali didattici da parte dei Docenti, verranno caricati in questa sezione.
            </p>
          </section>

          <section id="locandine" style={{ marginTop: '40px', marginBottom: '100px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Locandine</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Qui puoi scaricare le locandine degli eventi:
            </p>
            
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px' }}>
                <a href="/4.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Locandina del 4 Ottobre 2024
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="/5.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Locandina del 5 Ottobre 2024
                </a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="/Capri-14-ottobre-2023.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 102, 204)', fontWeight: '600', fontSize: '20px', lineHeight: 'normal' }}>
                  Locandina del 14 Ottobre 2023
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
            margin: 0 10px;
          }

          .colonna-indice {
            width: 100%;
            padding: 10px 20px;
            margin-right: 0;
            border-right: none;
            border-bottom: 1px solid #ccc;
          }

          .colonna-contenuto {
            width: 100%;
            padding: 10px 0;
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

          ul {
            padding-left: 10px;
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

          ul {
            padding-left: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default SezioneStreamingMateriali;
