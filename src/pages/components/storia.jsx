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

      <div className="container">
        {/* Colonna Indice */}
        <div className="colonna-indice">
          <h2 className="indice-titolo">INDICE DELLA PAGINA</h2>
          <ul className="indice-lista">
            <li><a href="#registrazioni2024">Registrazioni 2024</a></li>
            <li><a href="#registrazioni2023">Registrazioni 2023</a></li>
            <li><a href="#interventiVideo">Interventi Video Registrati</a></li>
            <li><a href="#materiali">Materiali</a></li>
            <li><a href="#locandine">Locandine</a></li>
            <li><a href="#criteri">Criteri Redazionali</a></li>
          </ul>
        </div>

        {/* Colonna Contenuto */}
        <div className="colonna-contenuto">
          <h1>Sezione Streaming e Materiali</h1>
          <p>
            In questa sezione troverai tutti i collegamenti ai webinar, ai video registrati, e i materiali dell'evento. Potrai accedere alle registrazioni delle edizioni passate, scaricare locandine, e consultare documenti utili per la tua partecipazione.
          </p>

          {/* Sezione Webinar */}
          <section id="registrazioni2024">
            <h2>Registrazioni 2024</h2>
            <p>Sono disponibili le video registrazioni dei vari momenti del convegno</p>
            <ul>
              <li>
                <a href="https://youtu.be/R__gHo6SqWs?si=bMK1oWnBYy6d1wK-" target="_blank" rel="noopener noreferrer">
                  Questioni di diritto e processo del lavoro, <br />nell’era della rivoluzione tecnologica <br />
                  Venerdì 4 ottobre 2024 - 14:30 - 18:00
                </a>
              </li>
              <li>
                <a href="https://youtu.be/0cz6gVI2fGg?si=zjzDeym889cWLCMY" target="_blank" rel="noopener noreferrer">
                  La Giustizia moderna alla luce dei <br />Regolamenti adottati dall’UE nel Decennio Digitale <br />
                  Sabato 5 ottobre 2024 - 08:45 - 13:30
                </a>
              </li>
              <li>
                <a href="https://youtu.be/UILghXjQKEg?si=rgcI_OowotJ4I22v" target="_blank" rel="noopener noreferrer">
                GRUPPO 1 <br /> L’innovazione e la digitalizzazione nel diritto e processo civile <br />
                  Sabato 5 ottobre 2024 - 14:45 - 17:30

                
                </a>
              </li>
              <li>
                <a href="https://youtu.be/UILghXjQKEg?si=rgcI_OowotJ4I22v" target="_blank" rel="noopener noreferrer">
                GRUPPO 2 <br />  L’innovazione e la digitalizzazione del processo penale <br />
                  Sabato 5 ottobre 2024 - 14:45 - 17:30

                
                </a>
              </li>
              <li>
                <a href="https://youtu.be/UK3TUgqLmWk?si=Yy2knlfT9lG9Omzm" target="_blank" rel="noopener noreferrer">
                GRUPPO 3 <br /> Processo Telematico ed Intelligenza Artificiale: Rischi e Opportunità per la Giustizia Tributaria <br />
                  Sabato 5 ottobre 2024 - 14:45 - 17:30

                
                </a>
              </li>
              <li>
                <a href="https://youtu.be/lErIN0WBtWU?si=ZFy5icJQaA9qF_nD" target="_blank" rel="noopener noreferrer">
                GRUPPO 5 <br /> GRUPPO 5: Europe’s Digital Decade (La digitalizzazione in Europa) <br />
                  Sabato 5 ottobre 2024 - 14:45 - 17:30

                
                </a>
              </li>
            </ul>
          </section>

          {/* Sezione Registrazioni 2024 */}
  

          {/* Sezione Registrazioni 2023 */}
          <section id="registrazioni2023">
            <h2>Registrazioni 2023</h2>
            <p>Ecco le registrazioni degli eventi del 2023:</p>
            <ul>
              <li>
                <a href="https://youtu.be/g2Ebj1B1GD8?si=lUCLFJdGWYvsuFfJ" target="_blank" rel="noopener noreferrer">
                  Capri 13 ottobre 2023 - Sala Pollio
                </a>
              </li>
              <li>
                <a href="https://youtu.be/qa89hs8aRHI?si=CJchAU5onjgKXnYX" target="_blank" rel="noopener noreferrer">
                  Capri 14 ottobre 2023 - Certosa plenaria
                </a>
              </li>
            </ul>
          </section>

          {/* Sezione Interventi Video */}
          <section id="interventiVideo">
            <h2>Interventi Video Registrati</h2>
            <p>Ecco i video degli interventi registrati durante l'evento:</p>
            <ul>
              <li>
                <a href="https://youtu.be/1Ac-ynp7QEs" target="_blank" rel="noopener noreferrer">
                  Presidente della Camera Avvocati Tributaristi di Napoli: <br />"Intervento Capri" <br />
                  Relatore: Avv. Michele Di Fiore
                </a>
              </li>
              <li>
                <a href="https://youtu.be/J0bCufBj2BA" target="_blank" rel="noopener noreferrer">
                  "La Global Governance per l'informatica giudiziaria" <br />
                  Relatore: Presidente Claudio Castelli
                </a>
              </li>
            </ul>
          </section>

          {/* Sezione Materiali */}
          <section id="materiali">
            <h2>Materiali</h2>
            <p>Una volta ricevuti i materiali didattici da parte dei Docenti, verranno caricati in questa sezione.</p>
          </section>

          {/* Sezione Locandine */}
          <section id="locandine">
            <h2>Locandine</h2>
            <p>Qui puoi scaricare le locandine degli eventi:</p>
            <ul>
              <li>
                <a href="/4.pdf" target="_blank" rel="noopener noreferrer">
                  Locandina del 4 Ottobre 2024
                </a>
              </li>
              <li>
                <a href="/5.pdf" target="_blank" rel="noopener noreferrer">
                  Locandina del 5 Ottobre 2024
                </a>
              </li>
            </ul>
          </section>


          {/* Sezione Criteri Redazionali */}
          <section id="criteri">
            <h2>Criteri Redazionali</h2>
            <p>Riferimento per la pubblicazione</p>
            <ul>
              <li>
                <a href="/4.pdf" target="_blank" rel="noopener noreferrer">
                Si utilizzano i criteri redazionali della Scuola Superiore della Magistratura, consultabili tramite questo LINK.
                </a>
              </li>
              
            </ul>
          </section>



        </div>
      </div>

      <style jsx>{`
        /* CSS Reset per eliminare margini, padding e bordi predefiniti */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Stili di base */
        .container {
          display: flex;
          flex-direction: row;
          margin-top: 30px;
          font-family: 'Titillium Web', sans-serif;
          background-color: #fff;
          color: #000;
          padding: 0 20px;
        }

        .colonna-indice {
          width: 20%;
          padding: 0 20px 0 10px;
          border-right: 1px solid #ccc;
          margin-right: 20px;
          border-bottom: none; /* Elimina il bordo inferiore */
          box-shadow: none; /* Assicura che non ci siano ombre */
        }

        .indice-titolo {
          font-size: 22px;
          font-weight: 600;
          color: rgb(0, 102, 204);
        }

        .indice-lista {
          list-style-type: none;
          padding: 0;
          margin-top: 20px;
        }

        .indice-lista li {
          margin-bottom: 15px;
        }

        .indice-lista a {
          color: rgb(0, 102, 204);
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
        }

        .colonna-contenuto {
          width: 75%;
          padding-left: 20px;
          border-bottom: none; /* Rimuovi qualsiasi bordo inferiore */
          box-shadow: none; /* Assicura che non ci siano ombre */
        }

        h1 {
          font-size: 44px;
          font-weight: 700;
          color: rgb(26, 26, 26);
        }

        h2 {
          font-size: 26px;
          font-weight: 600;
          color: rgb(26, 26, 26);
          margin-bottom: 10px;
        }

        p {
          font-size: 20px;
          font-weight: 300;
          color: rgb(47, 71, 94);
          line-height: 30px;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin-bottom: 15px;
        }

        a {
          color: rgb(0, 102, 204);
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
        }

        /* Media query per tablet e dispositivi mobili */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 0 10px;
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
            font-size: 36px;
          }

          h2 {
            font-size: 22px;
          }

          p, a {
            font-size: 18px;
          }

          ul {
            padding-left: 10px;
          }
        }

        @media (max-width: 480px) {
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
            padding-left: 5px;
          }

          .colonna-indice {
            padding-left: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default SezioneStreamingMateriali;
