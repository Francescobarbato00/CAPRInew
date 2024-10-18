import { supabase } from './supabaseClient';

export default async function confirmAttendance(req, res) {
  try {
    const { token } = req.body;  // Riceviamo il token dal corpo della richiesta

    console.log(`Token ricevuto: ${token}`); // Debug per vedere il token ricevuto

    // Controlla se il token è valido
    if (!token) {
      return res.status(400).json({ success: false, message: 'Token non valido o mancante' });
    }

    // Cerca il partecipante nel database tramite il token
    const { data, error } = await supabase
      .from('registrations')
      .select('id, nome, cognome, email, partecipation_token') // Aggiungi anche l'ID per identificare univocamente
      .eq('partecipation_token', token)
      .single();

    // Se il partecipante non è trovato o si verifica un errore
    if (error || !data) {
      console.error("Errore nella ricerca del partecipante:", error);
      return res.status(404).json({ success: false, message: 'Partecipante non trovato o token non valido' });
    }

    console.log(`Partecipante trovato: ${data.nome} ${data.cognome}`); // Debug per vedere il partecipante

    // Aggiorna il campo 'partecipation_token' per indicare che ha partecipato (o un altro campo, se preferisci)
    const { error: updateError } = await supabase
      .from('registrations')
      .update({ partecipation_token: 'confirmed' }) // Aggiorna il token a 'confirmed'
      .eq('id', data.id); // Usa l'ID per garantire che stiamo aggiornando il record corretto

    // Gestione degli errori nell'aggiornamento
    if (updateError) {
      console.error("Errore durante l'aggiornamento della partecipazione:", updateError);
      return res.status(500).json({ success: false, message: `Errore durante l'aggiornamento: ${updateError.message}` });
    }

    // Restituisci un messaggio di successo con i dati del partecipante
    return res.status(200).json({
      success: true,
      message: `Presenza confermata per ${data.nome} ${data.cognome}`,
      participant: {
        nome: data.nome,
        cognome: data.cognome,
        email: data.email
      }
    });
    
  } catch (error) {
    console.error("Errore nel processo di conferma della presenza:", error);
    return res.status(500).json({ success: false, message: 'Errore durante la conferma della presenza' });
  }
};
