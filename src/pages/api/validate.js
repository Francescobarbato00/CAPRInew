// src/pages/validate.js (puoi rinominarlo a confirmAttendance.js se preferisci)
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
      <p>La tua presenza è stata registrata.</p>
    </div>
  );
}

// Funzione per ottenere i dati dal server prima di renderizzare la pagina
export async function getServerSideProps({ query }) {
  const { token } = query;  // Estrarre il token dalla query string (passato tramite il QR code)

  try {
    // Cerca il partecipante nel database utilizzando il participation_token
    const { data: participant, error: selectError } = await supabase
      .from('registrations')
      .select('*')
      .eq('participation_token', token) // Cerca il partecipante usando il token
      .single(); // Usato per ottenere un solo record

    if (selectError || !participant) {
      return { props: { error: 'Partecipante non trovato o token non valido' } };
    }

    // Aggiorna la presenza del partecipante (ad esempio: imposta `present` a true)
    const { error: updateError } = await supabase
      .from('registrations')
      .update({ present: true })  // Aggiorna lo stato di presenza
      .eq('participation_token', token);  // Usa il token per identificare il record

    if (updateError) {
      return { props: { error: 'Errore durante la registrazione della presenza' } };
    }

    // Restituisce i dati del partecipante se trovato e aggiornato correttamente
    return { props: { participant } };
  } catch (error) {
    console.error('Errore durante la validazione:', error);
    return { props: { error: 'Errore durante la validazione' } };
  }
}
