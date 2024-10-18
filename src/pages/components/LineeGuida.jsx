import React from 'react';

const GalleriaImmagini = () => {
  const immagini = [
    { src: '6.jpg', alt: 'Immagine 1', didascalia: 'Certosa di San Giacomo' },
    { src: '2.jpg', alt: 'Immagine 2', didascalia: 'Sessione del 5/10/24' },
    { src: '1.jpg', alt: 'Immagine 3', didascalia: 'Plenaria nella Certosa' },
    { src: '5.jpg', alt: 'Immagine 4', didascalia: 'Sala Diefenbach' },
    { src: '4.jpg', alt: 'Immagine 5', didascalia: 'Museo archeologico di Capri - Quarto del Priore della Certosa di San Giacomo' },
    // Aggiungi altre immagini qui
  ];

  return (
    <div className="bg-gray-100 py-6 px-4 sm:py-10 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-4 sm:mb-6">Galleria dell'Evento</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
          Scopri la nostra selezione di immagini rappresentative del progetto.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {immagini.map((immagine, index) => (
            <div key={index} className="group">
              {/* Cliccabile */}
              <a href={immagine.link} className="block relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out lg:group-hover:scale-105">
                {/* Div per mantenere l'aspetto quadrato, come una cornice */}
                <div className="relative pb-[100%] bg-gray-200">
                  <img
                    src={immagine.src}
                    alt={immagine.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </a>
              {/* Didascalia */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-2 text-center">{immagine.didascalia}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleriaImmagini;
