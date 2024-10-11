import { useState, useEffect } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';

export default function AddNews() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Verifica se l'utente è autenticato e ha il ruolo di admin
  useEffect(() => {
    const checkUserRole = async () => {
      // Usa supabase.auth.getSession() invece di session()
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push('/login'); // Se non è autenticato, reindirizza al login
      } else {
        const { user } = session;
        const { data: userProfile, error } = await supabase
          .from('users')
          .select('role')
          .eq('email', user.email)
          .single();

        if (error || userProfile.role !== 'admin') {
          router.push('/'); // Se non è admin, reindirizza alla homepage
        } else {
          setUser(user);
          setLoading(false); // Consenti l'accesso se l'utente è admin
        }
      }
    };

    checkUserRole();
  }, [router]);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  // Contenuto del form rimane invariato
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null); // File immagine caricato
  const [imageUrl, setImageUrl] = useState(''); // URL dell'immagine
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false); // Stato di caricamento dell'immagine

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Se c'è un file immagine, caricalo
      if (imageFile) {
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
        slug = `${slug}-${Date.now()}`;
      }

      // Inserisci i dati nel database
      const { data, error } = await supabase
        .from('news')
        .insert([
          {
            title,
            slug,
            content,
            image_url: imageUrl,
          },
        ]);

      if (error) {
        throw error;
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
      setSubmitting(false);
    }
  };

  // Funzione per caricare l'immagine su Supabase
  const uploadImage = async (file) => {
    try {
      setUploading(true);

      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

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

      setImageUrl(publicUrlData.publicUrl); // Salva l'URL dell'immagine
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
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

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
            onChange={handleFileChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
          />
          {uploading && <p className="text-blue-500 mt-2">Caricamento in corso...</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out ${
              submitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={submitting}
          >
            {submitting ? 'Caricamento...' : 'Aggiungi Notizia'}
          </button>
        </div>
      </form>
    </div>
  );
}
