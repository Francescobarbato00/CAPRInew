import React from 'react';
import Head from 'next/head';

export default function ContactForm() {
  return (
    <>
      {/* Aggiungere il font Titillium Web solo per questo componente */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="max-w-7xl mx-auto py-10 px-5">
        {/* Titolo con Titillium Web, più grande e sottile */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8" style={{ fontFamily: "'Titillium Web', sans-serif", fontWeight: 400 }}>
          Contattaci
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Colonna sinistra - Contatti */}
          <div className="space-y-6">
            <div>
              <h2 className="text-blue-500 font-bold uppercase mb-1">Sedi</h2>
              <p className="text-gray-700">Capri, Sala Pollio</p>
              <p className="text-gray-700">Capri, Certosa di San Giacomo</p>
            </div>
            <div>
              <h2 className="text-blue-500 font-bold uppercase mb-1">Contatti</h2>
              <p className="text-gray-700">
                Tel: <a href="tel:+39xxxxxxxxxx" className="text-blue-500 hover:underline">+39 xxx xxx xxxx</a>
              </p>
              <p className="text-gray-700">
                E-mail: <a href="mailto:eventodigitalizzazionecapri@gmail.com" className="text-blue-500 hover:underline">eventodigitalizzazionecapri@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Colonna destra - Form */}
          <div>
            <form className="space-y-6">
              {/* Nome e cognome */}
              <div>
                <label htmlFor="name" className="block text-gray-700">Nome e Cognome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Messaggio */}
              <div>
                <label htmlFor="message" className="block text-gray-700">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Checkbox Privacy Policy */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="h-4 w-4 mt-1 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="ml-2 text-gray-700">
                  Dichiaro di aver letto e compreso la <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                </label>
              </div>

              {/* Bottone di invio */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                >
                  INVIA
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
