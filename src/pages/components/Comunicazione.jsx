import React, { useState, useEffect } from 'react';
import { supabase } from '../api/supabaseClient';
import Link from 'next/link';

const Comunicazione = () => {
  const [comunicazioni, setComunicazioni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComunicazioni = async () => {
      const { data, error } = await supabase
        .from('comunicazioni') // Nome della tua tabella comunicazioni
        .select('*')
        .order('created_at', { ascending: false }); // Ordina per data di creazione

      if (error) {
        console.error('Errore nel recupero delle comunicazioni:', error.message);
      } else {
        setComunicazioni(data);
      }
      setLoading(false);
    };

    fetchComunicazioni();
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 space-y-4 sm:space-y-0">
          <h2 className="text-3xl sm:text-4xl font-light text-black">Comunicazioni in primo piano</h2>
          <a href="#" className="text-blue-600 font-semibold underline hover:text-blue-800">
            SCOPRI TUTTE LE COMUNICAZIONI &rarr;
          </a>
        </div>

         {/* Barra di navigazione */}
         <nav style={{ marginBottom: '30px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
                <ul style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', listStyle: 'none', padding: '0', marginBottom: '0' }}>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/news">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '1.5rem', lineHeight: '2rem' }}>News</span>
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/eventi">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '1.5rem', lineHeight: '2rem' }}>Eventi</span>
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/comunicazioni-tecniche">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '1.5rem', lineHeight: '2rem' }}>Comunicazioni Tecniche</span>
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/pubblicazioni">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '1.5rem', lineHeight: '2rem' }}>Pubblicazioni</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        {/* Comunicazioni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            <p className="text-gray-500 text-center col-span-3">Caricamento delle comunicazioni...</p>
          ) : comunicazioni.length > 0 ? (
            comunicazioni.map((comunicazione) => (
              <div key={comunicazione.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={comunicazione.image_url || '/placeholder.jpg'} alt={comunicazione.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap space-x-2 mb-2">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">
                      {comunicazione.category || 'Comunicazione'}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                    <Link href={`/comunicazioni/${comunicazione.slug}`}>
                      {comunicazione.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {comunicazione.content.substring(0, 100)}... {/* Mostra solo un estratto */}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    COMUNICAZIONE • {new Date(comunicazione.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">Nessuna comunicazione disponibile al momento.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comunicazione;
