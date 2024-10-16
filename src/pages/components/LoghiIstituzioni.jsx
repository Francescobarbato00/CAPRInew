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

      <div className="container">
        {/* Colonna a sinistra: Testo */}
        <div className="left-column">
          <h2>
            Istituzioni che
            <br />
            hanno contribuito
          </h2>
        </div>

        {/* Colonna a destra: Loghi */}
        <div className="logos-grid">
          {loghi.map((logo, index) => (
            <div
              key={index}
              className="logo-item"
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            >
              <Image src={logo} alt={`Logo ${index + 2}`} width={150} height={100} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>

      {/* CSS per rendere la sezione responsive */}
      <style jsx>{`
        .container {
          display: flex;
          background-color: #fff;
          padding: 50px 20px;
          font-family: 'Titillium Web', Geneva, Tahoma, sans-serif;
        }

        .left-column {
          width: 30%;
          padding-right: 40px;
          display: flex;
          align-items: center;
        }

        h2 {
          font-size: 48px;
          font-weight: 300;
          color: rgb(26, 26, 26);
          line-height: 48px;
        }

        .logos-grid {
          width: 70%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          justify-items: center;
          align-items: center;
        }

        .logo-item {
          width: 150px;
          height: 100px;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 20px;
            margin-bottom: 0; /* Assicura che non ci siano margini in fondo su mobile */
          }

          .left-column {
            width: 100%;
            padding-right: 0;
            text-align: center; /* Centra il contenitore */
            margin-bottom: 20px;
            display: flex;
            justify-content: center; /* Centra il contenuto orizzontalmente */
          }

          h2 {
            font-size: 28px;
            line-height: 34px;
            text-align: center; /* Centra il testo */
          }

          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .logos-grid,
          .logo-item {
            width: 100%;
          }

          .logo-item {
            width: 100px;
            height: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default LoghiIstituzioni;
