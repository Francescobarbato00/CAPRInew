import { useState } from 'react';
import { supabase } from '../api/supabaseClient'; // Assicurati che il percorso sia corretto

export default function UploadTest() {
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file) => {
    try {
      debugger; // Inserisco un debugger all'inizio del caricamento dell'immagine
      console.log("Inizio il caricamento dell'immagine...", file);
      
      setUploading(true);

      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log("Carico l'immagine nel bucket...", filePath);

      const { error: uploadError } = await supabase.storage
        .from('news-images')
        .upload(filePath, file);

      if (uploadError) {
        console.error("Errore durante il caricamento dell'immagine:", uploadError.message);
        throw uploadError;
      }

      console.log("Immagine caricata con successo!");

      // Ottieni l'URL pubblico dell'immagine
      const { data: publicUrlData, error: urlError } = supabase.storage
        .from('news-images')
        .getPublicUrl(filePath);

      if (urlError) {
        console.error("Errore durante l'ottenimento dell'URL pubblico:", urlError.message);
        throw urlError;
      }

      console.log("URL pubblico dell'immagine:", publicUrlData.publicUrl);
      setImageUrl(publicUrlData.publicUrl); // Salva l'URL dell'immagine
      alert(`Immagine caricata con successo: ${publicUrlData.publicUrl}`);
      
    } catch (error) {
      console.error('Errore durante il caricamento dell\'immagine:', error.message);
      alert('Errore durante il caricamento dell\'immagine');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    debugger; // Inserisco un debugger qui per monitorare il caricamento del file
    const file = e.target.files[0];
    console.log("File selezionato:", file);

    if (file) {
      uploadImage(file);
    }
  };

  return (
    <div>
      <h1>Test di caricamento immagine</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading && <p>Caricamento in corso...</p>}
      {imageUrl && (
        <div>
          <p>Immagine caricata con successo:</p>
          <img src={imageUrl} alt="Immagine caricata" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}
