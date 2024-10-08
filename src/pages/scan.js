// pages/scan.js
import { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function ScanPage() {
  const [message, setMessage] = useState('');

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
        setMessage(`Presenza confermata per ${data.participant.nome} ${data.participant.cognome}`);
      } else {
        setMessage(`Errore: ${data.error}`);
      }
    } catch (error) {
      setMessage('Errore durante la scansione');
    }
  };

  // Funzione chiamata se lo scan fallisce
  const onScanError = (error) => {
    console.warn(`Errore durante la scansione: ${error}`);
  };

  return (
    <div>
      <h1>Scansiona QR Code</h1>
      <div id="reader" style={{ width: '500px' }}></div>
      <p>{message}</p>
    </div>
  );
}
