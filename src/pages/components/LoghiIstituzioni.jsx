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
        {/* Imposta il titolo del sito */}
        <title>Il Mio Sito</title>
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
          flexDirection: 'column', // Imposta il layout come colonna per mobile
          fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif",
        }}
      >
        {/* Colonna: Testo sopra i loghi */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
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

        {/* Colonna: Loghi sotto il titolo */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // 4 loghi per riga su desktop
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

      {/* Aggiunta delle media queries per rendere la sezione responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Cambiamo il layout a colonna su mobile */
          div[style*='display: grid'] {
            grid-template-columns: repeat(2, 1fr); /* 2 loghi per riga su mobile */
            gap: 20px; /* Riduzione del gap su mobile */
          }

          h2 {
            font-size: 28px; /* Riduciamo la dimensione del font su mobile */
            line-height: 34px;
          }

          div[style*='width: 150px'] {
            width: 100px; /* Riduzione delle dimensioni dei loghi su mobile */
            height: 70px;
          }

          div[style*='padding'] {
            padding: 20px; /* Riduciamo il padding su mobile */
          }
        }
      `}</style>
    </>
  );
};

export default LoghiIstituzioni;
