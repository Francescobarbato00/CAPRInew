import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 text-white" style={{ backgroundColor: '#002d64' }}>

      <div className="container mx-auto px-4">
        {/* Three columns: Contact Info, Useful Links, Thematic Sites */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          
          {/* Contact Information */}
          <div className="md:w-1/3">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Capri | Digitalizzazione della Giustizia</h2>
            <hr className="border-gray-400 mb-4" style={{ width: '200px' }}/>
            <p>Via Sella Orta 2, Capri</p>
            <p>Telefono: <a href="tel:+3906852641" className="underline hover:text-gray-300">+39 392578</a></p>
            <p>
              PEC: <a href="mailto:" className="underline hover:text-gray-300">protocollo@digitalizzazionecapri.it</a>
            </p>
            <p>
              Email: <a href="mailto:eventodigitalizzazionecapri@gmail.com" className="underline hover:text-gray-300">eventodigitalizzazionecapri@gmail.com</a>
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:w-1/3">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">LINK UTILI</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Amministrazione trasparente</a></li>
              <li><a href="#" className="hover:text-gray-300">Domande frequenti</a></li>
              <li><a href="LegalNotes" className="hover:text-gray-300">Note Legali</a></li>
            </ul>
          </div>

          {/* Thematic Sites */}
          <div className="md:w-1/3">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">SITI TEMATICI</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://www.giustizia.it/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Ministero della Giustizia
                </a>
              </li>
              <li>
                <a href="https://www.scuolamagistratura.it/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Scuola Superiore Della Magistratura
                </a>
              </li>
              <li>
                <a href="https://www.cortedicassazione.it/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Corte Suprema di Cassazione
                </a>
              </li>
              <li>
                <a href="https://www.agid.gov.it/it" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Agenzia per l'Italia Digitale
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end mt-8 space-x-6">
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-youtube"></i> {/* YouTube icon */}
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}
