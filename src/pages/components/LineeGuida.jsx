import React, { useState } from 'react';

const GalleriaImmagini = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const immagini = [
    { src: '6.jpg', alt: 'Immagine 1', didascalia: 'Certosa di San Giacomo' },
    { src: '2.jpg', alt: 'Immagine 2', didascalia: 'Sessione del 5/10/24' },
    { src: '1.jpg', alt: 'Immagine 3', didascalia: 'Plenaria nella Certosa' },
    { src: '5.jpg', alt: 'Immagine 4', didascalia: 'Sala Diefenbach' },
    { src: '4.jpg', alt: 'Immagine 5', didascalia: 'Museo archeologico di Capri - Quarto del Priore della Certosa di San Giacomo' },
    { src: '3.jpg', alt: 'Immagine 6', didascalia: 'Sala Pollio' },
    // Aggiungi altre immagini qui
  ];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 py-6 px-4 sm:py-10 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl font-light text-black mb-4 sm:mb-6">Galleria dell'Evento</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
          Esplora la galleria e riscopri i momenti più significativi del nostro evento
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {immagini.map((immagine, index) => (
            <div key={index} className="group">
              {/* Cliccabile */}
              <div
                onClick={() => handleClick(immagine)}
                className="cursor-pointer block relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out lg:group-hover:scale-105"
              >
                {/* Div per mantenere l'aspetto quadrato, come una cornice */}
                <div className="relative pb-[100%] bg-gray-200">
                  <img
                    src={immagine.src}
                    alt={immagine.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Didascalia */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-2 text-center">{immagine.didascalia}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal per mostrare l'immagine selezionata */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto"
          onClick={handleClose}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[70vh] object-contain"
            />
            <p className="text-white text-lg text-center mt-4">{selectedImage.didascalia}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleriaImmagini;
