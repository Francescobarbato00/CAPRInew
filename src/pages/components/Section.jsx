import React from 'react';

export default function Section() {
  return (
    <section className="bg-blue-900 text-white py-16 px-4">
      <div className="container mx-auto space-y-16">
        
        {/* First Section: Formazione progetto "Italia Login" */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 leading-tight">I contenuti formativi</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Formazione progetto "Italia Login"</h3>
            <p className="text-lg font-light mb-4">Webinar</p>
            <p className="text-lg sm:text-xl mb-8">
              Un percorso di formazione iniziato nel 2021 ed erogato attraverso webinar sulla piattaforma messa a disposizione da FORMEZ.
            </p>
            <a href="#" className="text-white font-semibold underline hover:text-gray-300 text-lg">
              VAI ALL'ELENCO DEI WEBINAR &rarr;
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-blue-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-6">
                <img src="/logocapri.png" alt="AGID Logo" className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
                <h3 className="text-xl sm:text-2xl font-medium">CAPRI 25</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium">Formazione progetto "Italia Login"</p>
            </div>
          </div>
        </div>

        {/* White dividing line */}
        <hr className="border-t border-white opacity-50 my-8" />

        {/* Second Section: Accessibilità */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Accessibilità</h3>
            <p className="text-lg font-light mb-4">Webinar</p>
            <p className="text-lg sm:text-xl mb-8">
              Un programma formativo gratuito sull'accessibilità digitale, fruibile da tutti i dipendenti pubblici e privati tramite aule virtuali. Il percorso si articola in tre diversi livelli: base, intermedio e avanzato.
            </p>
            <a href="#" className="text-white font-semibold underline hover:text-gray-300 text-lg">
              VAI AL PROGRAMMA &rarr;
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-blue-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-6">
                <img src="/logocapri.png" alt="AGID Logo" className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
                <h3 className="text-xl sm:text-2xl font-medium">CAPRI 25</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium">Accessibilità</p>
            </div>
          </div>
        </div>

        {/* White dividing line */}
        <hr className="border-t border-white opacity-50 my-8" />

        {/* Third Section: Intelligenza Artificiale */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Intelligenza Artificiale</h3>
            <p className="text-lg font-light mb-4">Webinar</p>
            <p className="text-lg sm:text-xl mb-8">
              Una serie di video su YouTube nati per diffondere e promuovere l'uso sicuro ed efficace dell'IA.
            </p>
            <a href="#" className="text-white font-semibold underline hover:text-gray-300 text-lg">
              VAI ALLA PLAYLIST DEI WEBINAR &rarr;
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-blue-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-6">
                <img src="/logocapri.png" alt="AGID Logo" className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
                <h3 className="text-xl sm:text-2xl font-medium">CAPRI 25</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium">Intelligenza Artificiale</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
