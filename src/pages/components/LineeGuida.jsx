import React from 'react';

const LineeGuida = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-light text-black mb-6">Le Linee Guida</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Definiscono principi e regole da seguire per la progettazione, realizzazione e gestione dei servizi digitali.
        </p>
        <a href="#" className="text-blue-600 text-lg sm:text-xl font-semibold underline hover:text-blue-800 mb-10 block">
          SCOPRI TUTTE LE LINEE GUIDA &rarr;
        </a>

        <div className="space-y-8">
          {/* Guide Item 1 */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12">
              <img src="document-icon.png" alt="Document Icon" className="w-full h-full object-contain" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs sm:text-sm">Linee Guida</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs sm:text-sm">Conservazione</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs sm:text-sm">Documento informatico</span>
              </div>
              <a href="#" className="text-xl sm:text-2xl font-medium text-blue-600 hover:text-blue-800 block mb-2">
                Linee Guida sulla formazione, gestione e conservazione dei documenti informatici
              </a>
              <p className="text-gray-500 text-base sm:text-lg">PDF | 780,7 KB</p>
            </div>
          </div>

          <hr className="border-t border-gray-300" />

          {/* Guide Item 2 */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12">
              <img src="document-icon.png" alt="Document Icon" className="w-full h-full object-contain" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs sm:text-sm">Linee Guida</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs sm:text-sm">Accessibilità</span>
              </div>
              <a href="#" className="text-xl sm:text-2xl font-medium text-blue-600 hover:text-blue-800 block mb-2">
                Linee Guida sull'accessibilità degli strumenti informatici - PA
              </a>
              <p className="text-gray-500 text-base sm:text-lg">PDF | 1,3 MB</p>
            </div>
          </div>

          <hr className="border-t border-gray-300" />

          {/* Guide Item 3 */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12">
              <img src="document-icon.png" alt="Document Icon" className="w-full h-full object-contain" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs sm:text-sm">Linee Guida</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs sm:text-sm">Accessibilità</span>
              </div>
              <a href="#" className="text-xl sm:text-2xl font-medium text-blue-600 hover:text-blue-800 block mb-2">
                Linee Guida sull'accessibilità degli strumenti informatici per soggetti privati
              </a>
              <p className="text-gray-500 text-base sm:text-lg">PDF | 398,6 KB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineeGuida;
