import { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';

export default function ScanPage() {
  const [message, setMessage] = useState('');
  const [statusColor, setStatusColor] = useState(''); // Colore del messaggio di stato
  const [loading, setLoading] = useState(false); // Indica se il processo di conferma è in corso
  const [authLoading, setAuthLoading] = useState(true); // Indica se la verifica dell'utente è in corso
  const router = useRouter(); // Hook per reindirizzare l'utente

  useEffect(() => {
    // Verifica se l'utente è autenticato e se è admin
    const checkUserRole = async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();
      const session = sessionData?.session;

      // Se non c'è sessione o errore, reindirizza alla pagina di login
      if (error || !session) {
        router.push('/login');
        return;
      }

      // Verifica se l'utente ha il ruolo di admin
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', session.user.id)
        .single();

      // Se l'utente non è admin o c'è un errore, reindirizza alla pagina di login
      if (userError || !userData || userData.role !== 'admin') {
        router.push('/login');
        return;
      }

      // Se l'utente è un admin, inizializza lo scanner QR
      setAuthLoading(false); // Fine del processo di autenticazione

      // Attendi un breve momento per assicurarti che il div `reader` sia nel DOM
      setTimeout(() => {
        const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
        scanner.render(onScanSuccess, onScanError);

        // Pulizia al termine del componente
        return () => {
          scanner.clear();
        };
      }, 500); // ritardo di 500ms
    };

    checkUserRole();
  }, [router]);

  // Funzione chiamata quando lo scan è un successo
  const onScanSuccess = async (decodedText) => {
    setLoading(true); // Avvia il caricamento
    setMessage(''); // Pulisci il messaggio precedente

    try {
      console.log(`QR Code scansionato: ${decodedText}`); // Log per vedere cosa contiene il QR code

      const token = decodedText; // Il token è il QR code decodificato

      if (!token) {
        throw new Error('Il QR code non contiene un token valido.');
      }

      console.log(`Token estratto: ${token}`); // Aggiungi un log per vedere il token estratto

      // Invia il token al backend per confermare la presenza
      const res = await fetch('/api/confirmAttendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }) // Invia il token al backend
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Errore durante la conferma.');
      }

      const data = await res.json();
      console.log('Risposta dal server:', data); // Log della risposta del server

      // Conferma con messaggio di successo
      setStatusColor('green');
      setMessage(`Presenza confermata per ${data.participant.nome} ${data.participant.cognome}`);
    } catch (error) {
      // Gestione degli errori
      console.error('Errore durante la scansione:', error.message);
      setStatusColor('red');
      setMessage(`Errore: ${error.message}`);
    } finally {
      setLoading(false); // Termina il caricamento
    }
  };

  // Funzione chiamata se la scansione fallisce
  const onScanError = (error) => {
    console.warn(`Errore durante la scansione: ${error}`);
    setStatusColor('red');
    setMessage('Errore durante la scansione.');
  };

  // Mostra un messaggio di caricamento durante la verifica dell'utente
  if (authLoading) {
    return <p>Caricamento...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Scansiona il tuo QR Code</h1>

      {message && <p style={{ ...styles.message, color: statusColor }}>{message}</p>}

      <div id="reader" style={styles.qrReader}></div>

      {loading ? (
        <p style={{ ...styles.message, color: 'blue' }}>Conferma in corso...</p>
      ) : (
        <p style={{ ...styles.message, color: statusColor }}>{message}</p>
      )}
    </div>
  );
}

// Stili in linea
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
    fontFamily: "'Roboto', sans-serif",
  },
  qrReader: {
    width: '100%',
    maxWidth: '500px',
    border: '5px solid #333',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  message: {
    marginTop: '20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
  },
};
