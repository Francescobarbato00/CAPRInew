import React from 'react';

const Comunicazione = () => {
    return (
        <div style={{ fontFamily: "'Titillium Web', sans-serif", color: 'rgb(26, 26, 26)', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            {/* Sezione Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '50px' }}>
                <div>
                    <h1 style={{ fontSize: '64px', fontWeight: '400', lineHeight: '72px', marginBottom: '0' }}>Comunicazione</h1>
                </div>
                <div style={{ maxWidth: '600px', textAlign: 'right' }}>
                    <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)', margin: '0' }}>
                        In questa sezione puoi consultare notizie, eventi, comunicazioni tecniche e pubblicazioni sulla trasformazione digitale,
                        l’innovazione tecnologica, le attività e le strategie per l’innovazione promosse nel Convegno.
                    </p>
                </div>
            </header>

            {/* Barra di navigazione */}
            <nav style={{ marginBottom: '30px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
                <ul style={{ display: 'flex', justifyContent: 'left', listStyle: 'none', padding: '0', marginBottom: '0' }}>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#news" style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>News</a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#eventi" style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>Eventi</a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#comunicazioni-tecniche" style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>Comunicazioni Tecniche</a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="#pubblicazioni" style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>Pubblicazioni</a>
                    </li>
                </ul>
            </nav>

            {/* Sezione Articoli */}
            <section style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginBottom: '50px' }}>
                <div style={{ width: '32%', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="calendar.jpg" alt="Calendar" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '15px' }} />
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <span style={{ background: '#e0e0e0', padding: '5px 10px', borderRadius: '5px', fontSize: '14px', fontWeight: '500', color: '#333' }}>SUAP&SUE</span>
                        <span style={{ background: '#e0e0e0', padding: '5px 10px', borderRadius: '5px', fontSize: '14px', fontWeight: '500', color: '#333' }}>PNRR</span>
                    </div>
                    <h3 style={{ fontSize: '32px', fontWeight: '400', lineHeight: '45px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                        SUAP: prorogata la scadenza dei bandi
                    </h3>
                    <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                        Fino al 24 ottobre 2024, Regioni e Comuni possono partecipare ai bandi di finanziamento per l’adeguamento delle piattaforme tecnologiche utilizzate per la gestione degli sportelli unici.
                    </p>
                    <a href="#vai-all-articolo" style={{ textDecoration: 'none', color: '#0073e6', fontWeight: '400', fontSize: '18px' }}>VAI ALL'ARTICOLO →</a>
                </div>

                <div style={{ width: '32%', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="open_data.jpg" alt="Open Data" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '15px' }} />
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <span style={{ background: '#e0e0e0', padding: '5px 10px', borderRadius: '5px', fontSize: '14px', fontWeight: '500', color: '#333' }}>Dati</span>
                        <span style={{ background: '#e0e0e0', padding: '5px 10px', borderRadius: '5px', fontSize: '14px', fontWeight: '500', color: '#333' }}>Open Data</span>
                    </div>
                    <h3 style={{ fontSize: '32px', fontWeight: '400', lineHeight: '45px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                        Il 26 settembre il terzo webinar
                    </h3>
                    <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                        Si conclude il ciclo. Verranno fornite le istruzioni operative per l’utilizzo degli strumenti messi a disposizione.
                    </p>
                    <a href="#vai-all-articolo" style={{ textDecoration: 'none', color: '#0073e6', fontWeight: '400', fontSize: '18px' }}>VAI ALL'ARTICOLO →</a>
                </div>

                <div style={{ width: '32%', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="checklist.jpg" alt="Checklist" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '15px' }} />
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <span style={{ background: '#e0e0e0', padding: '5px 10px', borderRadius: '5px', fontSize: '14px', fontWeight: '500', color: '#333' }}>Accessibilità</span>
                    </div>
                    <h3 style={{ fontSize: '32px', fontWeight: '400', lineHeight: '45px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                        Il 23 settembre scade il termine
                    </h3>
                    <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                        Le pubbliche amministrazioni e i soggetti privati dovranno presentare o aggiornare la dichiarazione di accessibilità per ciascun sito web o app.
                    </p>
                    <a href="#vai-all-articolo" style={{ textDecoration: 'none', color: '#0073e6', fontWeight: '400', fontSize: '18px' }}>VAI ALL'ARTICOLO →</a>
                </div>
            </section>
        </div>
    );
}

export default Comunicazione;
