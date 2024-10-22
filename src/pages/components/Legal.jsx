import React from 'react';
import Head from 'next/head';

const Legal = () => {
  return (
    <>
      <Head>
        <title>Note Legali - Digitalizzazione Capri</title>
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
            <li><a href="#noteLegali">Note Legali</a></li>
            <li><a href="#normativa">Normativa Applicabile</a></li>
            <li><a href="#titolarita">Titolarità dei Diritti</a></li>
            <li><a href="#utilizzoMateriali">Utilizzo dei Materiali</a></li>
          </ul>
        </div>

        {/* Colonna Contenuto */}
        <div className="colonna-contenuto">
          <h1 id="noteLegali">NOTE LEGALI</h1>
          <p>
            Accedendo o utilizzando questo sito web, gli utenti accettano senza riserve le seguenti condizioni d'uso. Se non si concorda con tali termini, l'accesso e l'utilizzo del sito non sono consentiti. Digitalizzazione Capri si riserva il diritto di modificare, aggiornare o integrare queste condizioni d'uso in qualsiasi momento, senza necessità di preavviso. Continuare a utilizzare il sito dopo eventuali modifiche implica l'accettazione delle condizioni così modificate.
          </p>

          <section id="normativa">
            <h2>Normativa Applicabile</h2>
            <p>
              Tutti i contenuti presenti su questo sito, inclusa la selezione, l'organizzazione, la disposizione e il design, sono protetti dalle leggi italiane sulla privacy (D.lgs. 30/6/2003, n. 196) e sul diritto d'autore (Legge 22/4/1941, n. 633 e successive modifiche). Queste norme disciplinano anche la protezione della proprietà intellettuale e industriale e si applicano ai materiali pubblicati sul sito.
            </p>
          </section>

          <section id="titolarita">
            <h2>Titolarità dei Diritti</h2>
            <p>
              Questo sito web è di esclusiva titolarità di Digitalizzazione Capri. Il dominio è stato assegnato secondo le norme vigenti al momento della richiesta. Tutti i diritti sui contenuti presenti nel sito appartengono a Digitalizzazione Capri. Alcune sezioni possono contenere materiale soggetto a diritti d’autore di terze parti, il cui utilizzo è regolato dalle relative licenze. La pubblicazione sul sito non implica la trasmissione di diritti sui contenuti.
            </p>
          </section>

          <section id="utilizzoMateriali">
            <h2>Utilizzo dei Materiali</h2>
            <p>
              I contenuti del sito possono essere utilizzati esclusivamente per fini personali, di informazione, ricerca o studio. La riproduzione dei testi è consentita solo a condizione che venga citata la fonte. È severamente vietato l'uso del sito e dei dati per scopi commerciali, pubblicitari o di sfruttamento economico senza autorizzazione espressa.
            </p>
            <p>
              Il sito <strong>digitalizzazionecapri.com</strong> può contenere collegamenti (link) a siti esterni. Utilizzando questi link, l'utente lascia il dominio del sito e accede a risorse esterne. Digitalizzazione Capri non si assume responsabilità per il contenuto dei siti collegati.
            </p>
            <p>
              Le normative pubblicate sul sito sono fornite a scopo informativo. L'unico testo ufficiale è quello presente sulla Gazzetta Ufficiale Italiana. In caso di discrepanze, fa fede il testo pubblicato sulla Gazzetta Ufficiale. Digitalizzazione Capri non è responsabile di eventuali errori o imprecisioni nei dati pubblicati sul sito.
            </p>
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
          display: flex;
          flex-wrap: wrap;
          gap: 10px; /* Spazio tra gli elementi dell'indice */
        }

        .indice-lista li {
          margin-bottom: 0;
        }

        .indice-lista a {
          color: rgb(0, 102, 204);
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
        }

        .colonna-contenuto {
          width: 80%;
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

          .indice-lista {
            display: block; /* Layout verticale su mobile */
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

export default Legal;
