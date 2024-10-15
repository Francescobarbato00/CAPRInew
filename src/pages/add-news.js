import { useState, useEffect } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';

export default function AddNews() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        router.push('/login');
      }
    };
    checkUser();
  }, [router]);

  useEffect(() => {
    console.log("URL aggiornato:", imageUrl);
  }, [imageUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (imageFile) {
        console.log("Inizio caricamento immagine...");
        await uploadImage(imageFile); // Aspetta che l'immagine sia caricata
      }

      if (!imageUrl) {
        alert("Attendi il completamento del caricamento dell'immagine.");
        setLoading(false);
        return;
      }

      let slug = title.toLowerCase().replace(/\s+/g, '-');

      const { data: existingNews } = await supabase
        .from('news')
        .select('slug')
        .eq('slug', slug);

      if (existingNews.length > 0) {
        slug = `${slug}-${Date.now()}`;
      }

      console.log("Aggiunta della news con i seguenti dati:", { title, slug, content, imageUrl });

      const { data, error } = await supabase
        .from('news')
        .insert([{ title, slug, content, image_url: imageUrl }]);

      if (error) {
        throw error;
      }

      alert('News aggiunta con successo!');
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

  const uploadImage = async (file) => {
    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log("Nome file:", fileName);

      const { error: uploadError } = await supabase.storage
        .from('news-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: publicUrlData, error: urlError } = supabase.storage
        .from('news-images')
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      console.log("URL pubblico dell'immagine:", publicUrlData.publicUrl);
      setImageUrl(publicUrlData.publicUrl); // Imposta l'URL dell'immagine
    } catch (error) {
      console.error('Errore durante il caricamento dell\'immagine:', error.message);
      alert('Errore durante il caricamento dell\'immagine');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Aggiungi una nuova notizia</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Titolo</label>
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

        <div className="relative">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">Contenuto</label>
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

        <div className="relative">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">Carica immagine</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
          {uploading && <p className="text-blue-500 mt-2">Caricamento in corso...</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out ${
              loading || uploading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-4'
            }`}
            disabled={loading || uploading} // Disabilita finché l'immagine non è caricata
          >
            {loading || uploading ? 'Caricamento...' : 'Aggiungi Notizia'}
          </button>
        </div>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Anteprima Immagine:</h3>
        {imageUrl ? (
          <img src={imageUrl} alt="Immagine della news" className="mt-4 max-w-full h-auto" />
        ) : (
          <p>Nessuna immagine caricata.</p>
        )}
      </div>

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
