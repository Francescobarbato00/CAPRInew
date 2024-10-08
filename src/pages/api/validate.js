// src/pages/validate.js
import { supabase } from './supabaseClient'; // Importa il client di Supabase

export default function ValidatePage({ participant, error }) {
  if (error) {
    return (
      <div>
        <h1>Errore nella validazione</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Partecipazione confermata</h1>
      <p>Partecipazione confermata per: {participant.nome} {participant.cognome}</p>
    </div>
  );
}

// Funzione per ottenere i dati dal server prima di renderizzare la pagina
export async function getServerSideProps({ query }) {
  const { id } = query;

  try {
    // Esegui una query al database tramite Supabase per trovare il partecipante con l'ID
    const { data: participant, error } = await supabase
      .from('registrations')
      .select('*')
      .eq('id', id)
      .single(); // Usato per ottenere un solo record

    if (error || !participant) {
      return { props: { error: 'Partecipante non trovato' } };
    }

    // Restituisce i dati del partecipante se trovato
    return { props: { participant } };
  } catch (error) {
    console.error('Errore durante la validazione:', error);
    return { props: { error: 'Errore durante la validazione' } };
  }
}
