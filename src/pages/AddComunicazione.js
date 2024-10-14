import { useState, useEffect } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';

export default function AddComunicazione() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false); // Stato di caricamento immagine
  const [session, setSession] = useState(null); // Stato per la sessione
  const router = useRouter();

  // Controllo della sessione dell'utente
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Errore nel recupero della sessione:', error);
      } else {
        setSession(data?.session);

        if (!data?.session) {
          router.push('/login'); // Se la sessione non è valida, reindirizza al login
        }
      }
    };

    checkSession();

    // Listener per aggiornare automaticamente il token di sessione se scade
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_OUT') {
          router.push('/login');
        } else if (event === 'TOKEN_REFRESHED') {
          setSession(session); // Aggiorna la sessione se il token viene aggiornato
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  // Funzione per gestire l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!session) {
        router.push('/login'); // Se non c'è sessione, reindirizza al login
        return;
      }

      // Controllo che l'immagine sia stata selezionata
      if (!imageFile) {
        alert('Seleziona un\'immagine prima di inviare il form.');
        setLoading(false);
        return;
      }

      // Carica l'immagine e aspetta che sia completato il caricamento
      await uploadImage(imageFile);

      // Verifica che l'URL dell'immagine sia stato impostato correttamente
      if (!imageUrl) {
        console.error("URL immagine non disponibile dopo il caricamento.");
        alert('Attendi il completamento del caricamento dell\'immagine.');
        setLoading(false);
        return;
      }

      let slug = title.toLowerCase().replace(/\s+/g, '-');

      const { data: existingComunicazione } = await supabase
        .from('comunicazioni')
        .select('slug')
        .eq('slug', slug);

      if (existingComunicazione.length > 0) {
        slug = `${slug}-${Date.now()}`;
      }

      console.log("Aggiunta comunicazione con i seguenti dati:", { title, slug, content, imageUrl, category });

      const { data, error } = await supabase
        .from('comunicazioni')
        .insert([{ title, slug, content, image_url: imageUrl, category }]);

      if (error) {
        throw error;
      }

      alert('Comunicazione aggiunta con successo!');
      setTitle('');
      setContent('');
      setImageFile(null);
      setImageUrl('');
      setCategory('');
      router.push('/admin'); // Reindirizza l'admin alla dashboard
    } catch (error) {
      console.error('Errore durante l\'inserimento:', error.message);
      alert('Errore durante l\'inserimento della comunicazione');
    } finally {
      setLoading(false);
    }
  };

  // Funzione per caricare l'immagine
  const uploadImage = async (file) => {
    try {
      setUploading(true); // Imposta lo stato di caricamento a true
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log("Nome file da caricare:", fileName);

      const { error: uploadError } = await supabase.storage
        .from('comunicazioni-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: publicUrlData, error: urlError } = await supabase.storage
        .from('comunicazioni-images')
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      console.log("URL pubblico dell'immagine caricata:", publicUrlData.publicUrl);
      setImageUrl(publicUrlData.publicUrl); // Imposta l'URL dell'immagine nello stato
    } catch (error) {
      console.error('Errore durante il caricamento dell\'immagine:', error.message);
    } finally {
      setUploading(false); // Imposta lo stato di caricamento a false
    }
  };

  useEffect(() => {
    if (uploading === false && imageUrl !== '') {
      console.log("Immagine caricata con successo:", imageUrl);
    }
  }, [uploading, imageUrl]); // Verifica lo stato di caricamento dell'immagine

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Aggiungi una nuova comunicazione</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Titolo
          </label>
          <input
            type="text"
            id="title"
            placeholder="Titolo della comunicazione"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        <div className="relative">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">
            Contenuto
          </label>
          <textarea
            id="content"
            placeholder="Inserisci il contenuto della comunicazione"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        <div className="relative">
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">
            Categoria
          </label>
          <input
            type="text"
            id="category"
            placeholder="Categoria (es: Comunicazioni Tecniche, Pubblicazioni)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        <div className="relative">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">
            Carica immagine
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
          />
          {uploading && <p className="text-blue-500 mt-2">Caricamento in corso...</p>}
        </div>

        <button
          type="submit"
          className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow-md ${
            loading || uploading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading || uploading} // Disabilitato durante il caricamento
        >
          {loading || uploading ? 'Caricamento...' : 'Aggiungi Comunicazione'}
        </button>
        <button
          className="w-full bg-gray-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-all duration-300 mt-6"
          onClick={() => router.push('/')}
        >
          Torna alla Home
        </button>
      </form>
    </div>
  );
}
