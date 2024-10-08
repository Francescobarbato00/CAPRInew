import React, { useState } from 'react';

export default function AgencyActions() {
  // Stato per i tab attivi
  const [activeTab, setActiveTab] = useState('Definisce strategie');

  return (
    <section className="bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Titolo principale */}
        <h2 className="text-4xl font-normal text-gray-800 mb-8">
  Programmazione dell'Evento
</h2>

        

        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-300 mb-6">
          <button
            className={`text-lg font-semibold pb-2 ${
              activeTab === 'Definisce strategie' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'
            }`}
            onClick={() => setActiveTab('Definisce strategie')}
          >
            Primo Giorno
          </button>
          <button
            className={`text-lg font-semibold pb-2 ${
              activeTab === 'Promuove competenze digitali' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'
            }`}
            onClick={() => setActiveTab('Promuove competenze digitali')}
          >
            Secondo Giorno
          </button>
          <button
            className={`text-lg font-semibold pb-2 ${
              activeTab === 'Monitora e vigila' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'
            }`}
            onClick={() => setActiveTab('Monitora e vigila')}
          >
            Eventi Ludici
          </button>
        </div>

        {/* Contenuto dinamico in base al tab attivo */}
        <div>
          {activeTab === 'Definisce strategie' && (
            <div>
              <p className="text-gray-700 mb-4">
                Prova testo di riempimento per colmare vuoto.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                APPROFONDISCI
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          )}
          {activeTab === 'Promuove competenze digitali' && (
            <div>
              <p className="text-gray-700 mb-4">
              Prova testo di riempimento per colmare vuoto.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                APPROFONDISCI
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          )}
          {activeTab === 'Monitora e vigila' && (
            <div>
              <p className="text-gray-700 mb-4">
              Prova testo di riempimento per colmare vuoto.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                APPROFONDISCI
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
