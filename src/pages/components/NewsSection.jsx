import React from 'react';

export default function NewsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 space-y-4 sm:space-y-0">
          <h2 className="text-3xl sm:text-4xl font-light">Le notizie in primo piano</h2>
          <a href="#" className="text-blue-600 font-semibold underline hover:text-blue-800">
            SCOPRI TUTTE LE NOTIZIE &rarr;
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* News Item 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/dottoressa.jpg" alt="News 1" className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">Capri</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">2024</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
              Capri 2024 - REPORT DEL CONVEGNO
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Gentilissimi iscritti e interessati al convegno, a nome di tutti i promotori e sostenitori di questa iniziativa, giunta alla dodicesima edizione, un piccolo report e un grande ringraziamento.
              </p>
              <p className="text-xs sm:text-sm text-gray-400">NEWS • 7/10/2024</p>
            </div>
          </div>

          
          {/* News Item 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/foto3.jpg" alt="News 3" className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">Accessibilità</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                Intervento del Signor Ministro all'Evento sulla Digitalizzazione della Giustizia
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Focus sul Ruolo della Tecnologia nel Rinnovamento del Sistema Giudiziario Italiano.
              </p>
              <p className="text-xs sm:text-sm text-gray-400">NEWS • 7/10/2024</p>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/prova.png" alt="News 2" className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">Locandine</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">Capri</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                Online le Locandine Ufficiali dell'Evento
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Pubblicato il Programma Completo e l'Elenco dei Relatori per le Due Giornate del Convegno di Capri.
              </p>
              <p className="text-xs sm:text-sm text-gray-400">NEWS • 20/09/2024</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
