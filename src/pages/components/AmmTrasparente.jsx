import React from 'react';
import Head from 'next/head';

const Trasparenza = () => {
  return (
    <>
      <Head>
        <title>Amministrazione Trasparente - Digitalizzazione Capri</title>
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
            <li><a href="#organizzazione">Organizzazione</a></li>
            <li><a href="#consulenti">Consulenti e Collaboratori</a></li>
            <li><a href="#attivita">Attività e Procedimenti</a></li>
            <li><a href="#provvedimenti">Provvedimenti</a></li>
            <li><a href="#controlli">Controlli e Rilievi</a></li>
            <li><a href="#sovvenzioni">Sovvenzioni e Contributi</a></li>
            <li><a href="#personale">Personale</a></li>
          </ul>
        </div>

        {/* Colonna Contenuto */}
        <div className="colonna-contenuto">
          <h1>AMMINISTRAZIONE TRASPARENTE</h1>

          <section id="organizzazione">
            <h2>Organizzazione</h2>
            <p>Descrizione dell'organizzazione dell'ente o azienda, con elenco di dirigenti e responsabili.</p>
          </section>

          <section id="consulenti">
            <h2>Consulenti e Collaboratori</h2>
            <p>Elenco di consulenti esterni e collaboratori, con i relativi contratti e compensi.</p>
          </section>


          <section id="attivita">
            <h2>Attività e Procedimenti</h2>
            <p>Elenco di procedimenti amministrativi e responsabili del procedimento.</p>
          </section>

          <section id="provvedimenti">
            <h2>Provvedimenti</h2>
            <p>Delibere, ordinanze, determinazioni e decreti adottati dall'ente.</p>
          </section>

          <section id="controlli">
            <h2>Controlli e Rilievi sull'Amministrazione</h2>
            <p>Relazioni di revisori, audit interni e controlli di qualità.</p>
          </section>

          <section id="sovvenzioni">
            <h2>Sovvenzioni, Contributi, Sussidi e Vantaggi Economici</h2>
            <p>Elenco dei beneficiari e criteri di assegnazione di contributi e sovvenzioni.</p>
          </section>

          <section id="personale">
            <h2>Personale</h2>
            <p>Organigramma e retribuzioni del personale dipendente e dirigenti.</p>
          </section>

        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

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
          padding-left: 20px;
          margin-bottom: 40px;
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
        }
      `}</style>
    </>
  );
};

export default Trasparenza;
