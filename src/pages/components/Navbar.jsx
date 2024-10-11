import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { supabase } from '../api/supabaseClient'; // Percorso corretto
import { useRouter } from 'next/router'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [session, setSession] = useState(null); // Stato sessione utente
  const router = useRouter();

  // Funzione per aprire/chiudere il menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Funzione per aprire/chiudere il modal di ricerca
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Funzione per gestire il logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/'); // Reindirizza alla home dopo il logout
  };

  useEffect(() => {
    // Recupera la sessione attiva al caricamento della pagina
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session);
    };

    // Listener per gestire i cambiamenti di stato della sessione
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    getSession();

    // Cleanup dell'event listener quando il componente viene smontato
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {/* Aggiungi il font Titillium Web */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav
        className="w-full flex items-center justify-between py-4 px-5 md:px-10 bg-white shadow-md z-50 relative"
        style={{ fontFamily: "'Titillium Web', sans-serif" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              src="/logocapri.png"
              alt="Logo Capri"
              className="w-16 h-16 md:w-24 md:h-24 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>

        {/* Menu links for desktop */}
        <div className="hidden md:flex absolute inset-x-0 justify-center z-10">
          <ul className="flex space-x-8 text-lg font-medium">
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="/event">L'Evento</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="#">Servizi</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="/infoSection">Comunicazioni</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="#">Streaming</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="/contact">Contattaci</Link>
            </li>
          </ul>
        </div>

        {/* Pulsanti di ricerca, login e registrazione */}
        <div className="flex items-center space-x-4 z-10">
          {/* Search icon for desktop */}
          <div className="relative">
            <button
              onClick={toggleModal}
              className="w-10 h-10 bg-white text-blue-900 rounded-full flex justify-center items-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l4.28 4.28"
                ></path>
              </svg>
            </button>
          </div>

          {/* Condiziona la visualizzazione in base alla sessione */}
          {!session ? (
            <div className="hidden md:flex space-x-4 items-center">
              {/* Mostra i pulsanti Login/Registrazione se l'utente non è loggato */}
              <Link href="/login">
                <span className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                  Login
                </span>
              </Link>

              <Link href="/registers">
                <span className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                  Registrazione
                </span>
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Logout
            </button>
          )}
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden flex space-x-4 items-center">
          <button
            onClick={toggleModal}
            className="text-blue-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l4.28 4.28"
              ></path>
            </svg>
          </button>

          <button
            onClick={toggleMenu}
            className="text-blue-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-30">
            <ul className="flex flex-col items-center space-y-4 py-6 px-4 text-lg font-medium text-black">
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="/event" onClick={toggleMenu}>
                  L'Evento
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="#" onClick={toggleMenu}>
                  Servizi
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="#" onClick={toggleMenu}>
                  Comunicazioni
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="#" onClick={toggleMenu}>
                  Streaming
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="/contact" onClick={toggleMenu}>
                  Contattaci
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal for search */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-90 z-40 flex justify-center items-center transition-opacity duration-500 ease-in-out"
          style={{ animation: 'fadeIn 0.5s ease' }} // Smooth fade-in animation
        >
          <div className="w-full max-w-3xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-7xl font-light text-black md:text-gray-800 md:font-light">
                Cerca nel sito
              </h2>

              <button
                onClick={toggleModal}
                className="text-gray-500 text-lg hover:text-gray-700"
              >
                Chiudi X {/* Close button */}
              </button>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Cerca..."
                className="w-full border border-gray-300 rounded-lg p-4 text-lg text-black focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300">
                Cerca
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
