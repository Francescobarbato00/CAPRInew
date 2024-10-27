import React, { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';
import Link from 'next/link';

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data: newsData, error } = await supabase.from('news').select('*');
      if (error) {
        console.error('Errore durante il fetching delle news:', error.message);
      } else {
        setNews(newsData);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 space-y-4 sm:space-y-0">
          <h2 className="text-3xl sm:text-4xl font-light text-black">Le notizie in primo piano</h2>
          <a className="text-blue-600 font-semibold underline hover:text-blue-800">
            SCOPRI TUTTE LE NOTIZIE &rarr;
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            <p className="text-gray-500 text-center col-span-3">Caricamento delle notizie...</p>
          ) : news.length > 0 ? (
            news.map((article) => (
              <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={article.image_url} alt={article.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap space-x-2 mb-2">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">
                      {article.category || 'Notizia'}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {article.content.substring(0, 100)}... {/* Mostra solo un estratto */}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">NEWS • {new Date(article.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">Nessuna notizia disponibile al momento.</p>
          )}
        </div>
      </div>
    </section>
  );
}
