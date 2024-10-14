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

      <div style={{ display: 'flex', marginTop: '30px', fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif" }}>
        {/* Colonna Indice con spazio bianco a sinistra */}
        <div style={{ width: '20%', paddingRight: '20px', paddingLeft: '40px', borderRight: '1px solid #ccc', marginRight: '40px' }}>
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
        <div style={{ width: '70%', paddingLeft: '20px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', color: 'rgb(26, 26, 26)', lineHeight: 'normal' }}>Sezione Streaming e Materiali</h1>
          <p style={{ fontSize: '24px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
            In questa sezione troverai tutti i collegamenti ai webinar, ai video registrati, e i materiali dell'evento. Potrai accedere alle registrazioni delle edizioni passate, scaricare locandine, e consultare documenti utili per la tua partecipazione.
          </p>

          <section id="webinar" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Webinar</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              La Corte di cassazione ha la sua sede in Roma nell’imponente edificio romano in piazza dei Tribunali, che si affaccia sul Tevere, al fianco di Castel Sant’Angelo...
            </p>
          </section>

          <section id="registrazioni2024" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Registrazioni 2024</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Nel suo discorso il ministro guardasigilli Vigliani ricostruì la vicenda politica che aveva portato alla costituzione della Cassazione romana e diede conto delle difficoltà...
            </p>
          </section>

          <section id="registrazioni2023" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Registrazioni 2023</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Sebbene la Cassazione operante in Roma non avesse ancora i compiti di una Corte suprema nazionale, sin dalla costituzione del regno unitario si sentì il bisogno di una sede adeguata...
            </p>
          </section>

          <section id="interventiVideo" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Interventi Video Registrati</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Zanardelli fu anche nominato direttore dei lavori, ai quali parteciparono circa mille operai. Iniziarono gli scavi nella zona di Prati Castello...
            </p>
          </section>

          <section id="materiali" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Materiali</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Furono forti e pesanti anche le polemiche, di varia natura, al punto che venne costituita una commissione d’inchiesta. Calderini si difese con vigore, ma ne rimase segnato...
            </p>
          </section>

          <section id="locandine" style={{ marginTop: '40px', marginBottom: '100px' }}> {/* Added extra bottom margin */}
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>Locandine</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '28px' }}>
              Al piano terra del palazzo, appena varcato l'ingresso principale di piazza Cavour, ci si trova davanti a uno dei luoghi più affascinanti della Corte...
            </p>
          </section>

        </div>
      </div>
    </>
  );
};

export default SezioneStreamingMateriali;
