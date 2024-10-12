import { useState, useEffect } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';

export default function AddNews() {
  const [title, setTitle] = useState(''); // Hook per il titolo
  const [content, setContent] = useState(''); // Hook per il contenuto
  const [imageFile, setImageFile] = useState(null); // File immagine caricato
  const [imageUrl, setImageUrl] = useState(''); // URL dell'immagine
  const [loading, setLoading] = useState(false); // Stato di caricamento
  const [uploading, setUploading] = useState(false); // Stato di caricamento dell'immagine

  const router = useRouter(); // Hook per la navigazione

  useEffect(() => {
    // Verifica che l'utente sia autenticato
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        router.push('/login'); // Se l'utente non è autenticato, reindirizza al login
      }
    };
    checkUser();
  }, [router]); // Si esegue solo al montaggio del componente

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Se c'è un file immagine, caricalo
      if (imageFile) {
        console.log("Inizio caricamento immagine...");
        await uploadImage(imageFile);
      }

      // Genera lo slug dal titolo
      let slug = title.toLowerCase().replace(/\s+/g, '-');

      // Controlla se lo slug esiste già
      const { data: existingNews } = await supabase
        .from('news')
        .select('slug')
        .eq('slug', slug);

      if (existingNews.length > 0) {
        // Se esiste già, aggiungi un timestamp per rendere lo slug unico
        slug = `${slug}-${Date.now()}`;
      }

      console.log("Aggiunta della news con i seguenti dati:");
      console.log({ title, slug, content, imageUrl });

      // Inserisci i dati nel database
      const { data, error } = await supabase
        .from('news')
        .insert([
          {
            title,
            slug,
            content,
            image_url: imageUrl, // Usa l'URL dell'immagine salvata
          },
        ]);

      if (error) {
        throw error; // Se c'è un errore durante l'inserimento della news
      }

      alert('News aggiunta con successo!');
      // Resetta i campi del form
      setTitle('');
      setContent('');
      setImageFile(null);
      setImageUrl('');
    } catch (error) {
      console.error('Errore durante l\'inserimento della news:', error.message);
      alert('Errore nell\'inserimento della news');
    } finally {
      setLoading(false);
    }
  };

  // Funzione per caricare l'immagine su Supabase
  const uploadImage = async (file) => {
    try {
      setUploading(true);

      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log("Caricamento dell'immagine nel bucket news-images...");

      // Carica il file nel bucket di Supabase
      const { error: uploadError } = await supabase.storage
        .from('news-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Ottieni l'URL pubblico dell'immagine
      const { data: publicUrlData, error: urlError } = supabase.storage
        .from('news-images')
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      console.log("Immagine caricata con successo. URL:", publicUrlData.publicUrl);
      setImageUrl(publicUrlData.publicUrl); // Salva l'URL dell'immagine
    } catch (error) {
      console.error('Errore durante il caricamento dell\'immagine:', error.message);
      alert('Errore durante il caricamento dell\'immagine');
    } finally {
      setUploading(false);
    }
  };

  // Funzione di gestione del file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Memorizza il file da caricare
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Aggiungi una nuova notizia</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Titolo */}
        <div className="relative">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Titolo
          </label>
          <input
            type="text"
            id="title"
            placeholder="Titolo della notizia"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        {/* Contenuto */}
        <div className="relative">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">
            Contenuto
          </label>
          <textarea
            id="content"
            placeholder="Inserisci il contenuto della notizia"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        {/* Caricamento immagine */}
        <div className="relative">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">
            Carica immagine
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
          {uploading && <p className="text-blue-500 mt-2">Caricamento in corso...</p>}
        </div>

        {/* Bottone di submit */}
        <div className="text-center">
          <button
            type="submit"
            className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out ${
              loading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-4'
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Caricamento...
              </div>
            ) : (
              'Aggiungi Notizia'
            )}
          </button>
        </div>
      </form>
      
      <button
            onClick={() => router.push('/')}
            className="mt-4 w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            style={{ fontFamily: 'Titillium Web, sans-serif' }}
          >
            Torna alla Home
          </button>
    </div>
  );
}
