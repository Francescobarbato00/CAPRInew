// pages/scan.js
import { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function ScanPage() {
  const [message, setMessage] = useState('');
  const [statusColor, setStatusColor] = useState(''); // Colore del messaggio di stato

  // Inizializza lo scanner una volta che il componente è montato
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader", { fps: 10, qrbox: 250 });
    scanner.render(onScanSuccess, onScanError);
  }, []);

  // Funzione chiamata quando lo scan è un successo
  const onScanSuccess = async (decodedText) => {
    try {
      // Estrae il token dal QR code scansionato
      const token = new URL(decodedText).searchParams.get('token');

      // Invia una richiesta POST all'API per confermare la presenza
      const res = await fetch('/api/confirmAttendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });

      const data = await res.json();

      if (res.ok) {
        setStatusColor('green'); // Cambia colore per indicare successo
        setMessage(`Presenza confermata per ${data.participant.nome} ${data.participant.cognome}`);
      } else {
        setStatusColor('red'); // Cambia colore per errore
        setMessage(`Errore: ${data.error}`);
      }
    } catch (error) {
      setStatusColor('red');
      setMessage('Errore durante la scansione');
    }
  };

  // Funzione chiamata se lo scan fallisce
  const onScanError = (error) => {
    console.warn(`Errore durante la scansione: ${error}`);
    setStatusColor('red');
    setMessage('Errore durante la scansione');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Scansiona il tuo QR Code</h1>

      <div id="reader" style={styles.qrReader}></div>

      <p style={{ ...styles.message, color: statusColor }}>{message}</p>
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
