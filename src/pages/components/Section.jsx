import React from 'react';

export default function Section() {
  return (
    <section className="bg-blue-900 text-white py-16 px-4">
      <div className="container mx-auto space-y-16">
        
        {/* First Section: Formazione progetto "Italia Login" */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 leading-tight">Ambiti di Discussione</h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Webinar e Tavole Rotonde</h3>
            <p className="text-lg font-light mb-4">Webinar</p>
            <p className="text-lg sm:text-xl mb-8">
            I principali temi di discussione includono l'integrazione delle nuove tecnologie e dell'intelligenza artificiale nel sistema giudiziario. L'evento CAPRI mira a esplorare come questi strumenti possono supportare gli operatori della giustizia nel migliorare l'efficienza e l'accessibilità dei processi legali.
            </p>
            <a href="event" className="text-white font-semibold underline hover:text-gray-300 text-lg">
            VAI AL PROGRAMMA DEGLI AMBITI DI DISCUSSIONE &rarr;
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-blue-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-6">
                <img src="/logocapri.png" alt="AGID Logo" className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
                <h3 className="text-xl sm:text-2xl font-medium">CAPRI 25</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium">"Formazione" </p>
            </div>
          </div>
        </div>

        {/* White dividing line */}
        <hr className="border-t border-white opacity-50 my-8" />

        {/* Second Section: Accessibilità */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Digitalizzazione della Giustizia</h3>
            <p className="text-lg font-light mb-4">Webinar e Approfondimenti</p>
            <p className="text-lg sm:text-xl mb-8">
            Esploriamo le sfide e le opportunità della digitalizzazione nel sistema giudiziario. Come le nuove tecnologie possono migliorare l’efficienza dei processi, ridurre i tempi di risposta e rendere la giustizia più accessibile per tutti.
            </p>
            <a href="event" className="text-white font-semibold underline hover:text-gray-300 text-lg">
            VAI AL DETTAGLIO DEL PROGRAMMA &rarr;
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-blue-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-6">
                <img src="/logocapri.png" alt="AGID Logo" className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
                <h3 className="text-xl sm:text-2xl font-medium">CAPRI 25</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium">"Accessibilità"</p>
            </div>
          </div>
        </div>

        {/* White dividing line */}
        <hr className="border-t border-white opacity-50 my-8" />

        {/* Third Section: Intelligenza Artificiale */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Supporto per Operatori della Giustizia</h3>
            <p className="text-lg font-light mb-4">Webinar e Materiale Formativo</p>
            <p className="text-lg sm:text-xl mb-8">
            Una serie di sessioni formative dedicate a fornire strumenti pratici e conoscenze per aiutare giudici, avvocati e personale amministrativo a utilizzare al meglio le tecnologie digitali e l’intelligenza artificiale nel loro lavoro quotidiano.
            </p>
            <a href="streaming" className="text-white font-semibold underline hover:text-gray-300 text-lg">
            VAI ALL’ELENCO DEI MATERIALI FORMATIVI &rarr;
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-blue-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center mb-6">
                <img src="/logocapri.png" alt="AGID Logo" className="w-10 h-10 sm:w-12 sm:h-12 mr-4" />
                <h3 className="text-xl sm:text-2xl font-medium">CAPRI 25</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium">"Intelligenza Artificiale"</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
