import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { supabase } from '../api/supabaseClient'; // Percorso corretto
import { useRouter } from 'next/router'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [session, setSession] = useState(null); // Stato sessione utente
  const [userRole, setUserRole] = useState(''); // Stato per il ruolo dell'utente
  const [searchQuery, setSearchQuery] = useState(''); // Stato per il termine di ricerca
  const [searchResults, setSearchResults] = useState([]); // Stato per i risultati della ricerca
  const [loading, setLoading] = useState(false); // Stato per il caricamento dei risultati

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
    setSession(null); // Aggiorna lo stato per rimuovere la sessione
    router.reload();  // Forza il ricaricamento della pagina dopo il logout
  };

  // Recupero della sessione e del ruolo utente
  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

        if (sessionError || !sessionData?.session) {
          console.log('Nessuna sessione attiva'); 
          return;
        }

        const userId = sessionData.session.user.id;
        console.log('ID utente:', userId);

        // Recupera il ruolo dell'utente dal database
        const { data: userData, error: roleError } = await supabase
          .from('users')
          .select('role')
          .eq('id', userId);

        if (roleError) {
          console.error('Errore nel recupero del ruolo:', roleError);
          return;
        }

        if (!userData || userData.length === 0) {
          console.error('Nessun utente trovato con questo ID.');
          return;
        }

        console.log('Dati utente recuperati:', userData);

        const userRole = userData[0]?.role || '';  // Seleziona il primo record se esiste

        if (userRole === 'admin') {
          setUserRole('admin');
        }

        setSession(sessionData.session);
      } catch (error) {
        console.error('Errore durante il recupero del ruolo utente:', error.message);
      }
    };

    getSession();

    // Listener per gestire i cambiamenti di stato della sessione
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session); // Aggiorna la sessione attuale o la rimuove
    });

    // Cleanup dell'event listener quando il componente viene smontato
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

 // Funzione per gestire la ricerca
const handleSearch = async () => {
  setLoading(true);

  try {
    // Query per cercare nella tabella "news"
    const { data: newsData, error: newsError } = await supabase
      .from('news') // Nome della tabella
      .select('*')
      .ilike('title', `%${searchQuery}%`); // Cerca dove il titolo corrisponde al termine di ricerca

    if (newsError) {
      console.error('Errore durante la ricerca nelle news:', newsError.message);
    }

    // Query per cercare nella tabella "comunicazioni"
    const { data: comunicazioniData, error: comunicazioniError } = await supabase
      .from('comunicazioni') // Nome della tabella
      .select('*')
      .ilike('title', `%${searchQuery}%`); // Cerca dove il titolo corrisponde al termine di ricerca

    if (comunicazioniError) {
      console.error('Errore durante la ricerca nelle comunicazioni:', comunicazioniError.message);
    }

    // Unisci i risultati delle due ricerche
    const combinedResults = [...(newsData || []), ...(comunicazioniData || [])];

    // Aggiorna lo stato con i risultati combinati
    setSearchResults(combinedResults);
  } catch (error) {
    console.error('Errore durante la ricerca:', error.message);
  }

  setLoading(false);
};

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
              <Link href="service">Servizi</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="/infoSection">Comunicazioni</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="streaming">Streaming</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              <Link href="/contact">Contattaci</Link>
            </li>
          </ul>
        </div>

        {/* Pulsanti di ricerca, login e registrazione */}
        <div className="flex items-center space-x-4 z-10">
          {/* Search icon for desktop */}
          <div className="relative hidden md:block">
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
            <>
              {/* Mostra il pulsante Admin solo se l'utente è un admin */}
              {userRole === 'admin' && (
                <Link href="/admin">
                  <span className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                    Admin
                  </span>
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Hamburger menu icon for mobile */}
        {/* Hamburger menu icon and search icon for mobile */}
        <div className="md:hidden flex justify-end items-center w-full px-4">
          {/* Lente di ricerca a sinistra dell'hamburger */}
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

          {/* Menu hamburger icon */}
          <button
            onClick={toggleMenu}
            className="ml-4 text-blue-900 focus:outline-none"
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
                <Link href="/service" onClick={toggleMenu}>
                  Servizi
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="infoSection" onClick={toggleMenu}>
                  Comunicazioni
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="/streaming" onClick={toggleMenu}>
                  Streaming
                </Link>
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                <Link href="/contact" onClick={toggleMenu}>
                  Contattaci
                </Link>
              </li>

              {/* Pulsanti Login e Registrazione per mobile */}
              {!session && (
                <>
                  <li className="hover:text-blue-400 transition-colors duration-300">
                    <Link href="/login" onClick={toggleMenu}>
                      Login
                    </Link>
                  </li>
                  <li className="hover:text-blue-400 transition-colors duration-300">
                    <Link href="/registers" onClick={toggleMenu}>
                      Registrazione
                    </Link>
                  </li>
                </>
              )}

              {/* Logout per mobile */}
              {session && (
                <li className="hover:text-blue-400 transition-colors duration-300">
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="focus:outline-none"
                  >
                    Logout
                  </button>
                </li>
              )}
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
                Chiudi X
              </button>
            </div>
            <div className="w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cerca..."
                className="w-full border border-gray-300 rounded-lg p-4 text-lg text-black focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Cerca
              </button>
            </div>

            {/* Visualizzazione dei risultati */}
            {loading ? (
              <p className="text-center text-gray-500 mt-6">Caricamento...</p>
            ) : (
              <div className="mt-6">
                {searchResults.length > 0 ? (
                  searchResults.map((article) => (
                    <div
                      key={article.id}
                      className="p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                      <Link
                        href={`${
                          article.content ? `/articles/${article.slug}` : `/comunicazioni/${article.slug}`
                        }`}
                      >
                        <h3 className="text-xl font-semibold text-blue-600 cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mt-2">
                        {article.content.substring(0, 100)}...
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">Nessun risultato trovato.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
