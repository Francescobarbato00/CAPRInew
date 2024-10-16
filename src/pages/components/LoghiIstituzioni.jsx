import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const LoghiIstituzioni = () => {
  const loghi = [
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
    '/8.png',
    '/9.png',
    '/10.png',
    '/11.png',
    '/12.png',
    '/13.png',
  ];

  return (
    <>
      <Head>
        <title>Loghi Istituzioni</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          display: 'flex',
          backgroundColor: '#fff',
          padding: '50px 20px',
          fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif",
        }}
      >
        {/* Colonna a sinistra: Testo */}
        <div style={{ width: '30%', paddingRight: '40px', display: 'flex', alignItems: 'center' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '300',
              color: 'rgb(26, 26, 26)',
              lineHeight: '48px',
              fontFamily: "'Titillium Web', sans-serif",
            }}
          >
            Istituzioni che
            <br />
            hanno contribuito
          </h2>
        </div>

        {/* Colonna a destra: Loghi */}
        <div
          style={{
            width: '70%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // 4 loghi per fila
            gap: '40px',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          {loghi.map((logo, index) => (
            <div
              key={index}
              style={{
                width: '150px',
                height: '100px',
                filter: 'grayscale(100%)',
                transition: 'filter 0.3s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            >
              <Image src={logo} alt={`Logo ${index + 2}`} width={150} height={100} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Ombra leggera alla fine della sezione */}
      <div style={{ height: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)' }}></div>

      {/* Aggiungi media queries per il layout responsive solo per mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*='display: flex'] {
            flex-direction: column; /* Colonna invece di riga su mobile */
            padding: 20px; /* Riduci il padding su mobile */
          }

          div[style*='width: 30%'] {
            width: 100%; /* Testo a tutta larghezza su mobile */
            padding-right: 0;
            text-align: center; /* Testo centrato */
            margin-bottom: 20px; /* Spazio sotto il testo */
          }

          h2 {
            font-size: 28px; /* Riduci la dimensione del font su mobile */
            line-height: 34px; /* Modifica l'interlinea su mobile */
          }

          div[style*='grid-template-columns'] {
            grid-template-columns: 1fr; /* Una sola colonna per i loghi su mobile */
            gap: 20px; /* Riduci lo spazio tra i loghi su mobile */
          }

          div[style*='width: 70%'] {
            width: 100%; /* Loghi a tutta larghezza su mobile */
          }

          div[style*='width: 150px'] {
            width: 100px; /* Riduci la dimensione dei loghi su mobile */
            height: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default LoghiIstituzioni;
