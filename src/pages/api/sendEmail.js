// src/pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

// Funzione per l'invio dell'email con QR code (per l'iscrizione al convegno)
export const sendConfirmationEmail = async (email, formData) => {
  try {
    // Configura il trasportatore SMTP per Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // La tua email Gmail
        pass: process.env.GMAIL_PASS, // La tua App Password di Gmail
      },
    });

    // Crea un URL di validazione unico
    const validationUrl = `email=${formData.email}`;
    // Genera un QR code con l'URL di validazione
    const qrCodeDataUrl = await QRCode.toDataURL(validationUrl);

    // Contenuto dell'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email, // Email dell'utente
      subject: 'Conferma Iscrizione al Convegno di Digitalizzazione',
      text: `Gentile partecipante,

Le confermiamo la corretta iscrizione al convegno sulla Digitalizzazione della Giustizia che si terrà a Capri.

Di seguito i dati da Lei inseriti:

Nome: ${formData.nome}
Cognome: ${formData.cognome}
Qualifica: ${formData.qualifica}
Email: ${formData.email}
Telefono: ${formData.telefono}
Sessione: ${formData.sessione}
Gruppo Tematico: ${formData.gruppoTematico || 'Nessuno'}
Note: ${formData.note || 'Nessuna'}

Può utilizzare il QR code allegato per validare la sua partecipazione al corso.

Grazie per la sua partecipazione!
Il team di organizzazione del Convegno`,
      attachments: [
        {
          filename: 'qrcode.png',
          content: qrCodeDataUrl.split('base64,')[1], // Rimuove il prefisso data:image/png;base64
          encoding: 'base64',
        },
      ],
    };

    // Invia l'email
    await transporter.sendMail(mailOptions);
    console.log('Email di conferma inviata con successo a:', email);
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email di conferma:', error);
  }
};

// Funzione per l'invio dell'email del form di contatto
export const sendContactFormEmail = async (name, email, message) => {
  try {
    // Configura il trasportatore SMTP per Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // La tua email Gmail
        pass: process.env.GMAIL_PASS, // La tua App Password di Gmail
      },
    });

    // Contenuto dell'email
    const mailOptions = {
      from: process.env.GMAIL_USER, // Da chi invia (la tua email)
      to: process.env.GMAIL_USER, // A chi viene inviata (te stesso)
      subject: `Nuovo messaggio da ${name}`, // Oggetto dell'email
      text: `Hai ricevuto un nuovo messaggio dal form di contatto:

Nome: ${name}
Email: ${email}
Messaggio: ${message}`,
      html: `<p>Hai ricevuto un nuovo messaggio da <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    };

    // Invia l'email
    await transporter.sendMail(mailOptions);
    console.log('Email di contatto inviata con successo da:', email);
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email di contatto:', error);
  }
};

// Gestore API principale
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { type, formData } = req.body;

    try {
      // Se il tipo è "confermaIscrizione", invia l'email di conferma
      if (type === 'confermaIscrizione') {
        await sendConfirmationEmail(formData.email, formData);
        return res.status(200).json({ message: 'Email di conferma inviata con successo.' });
      }
      // Se il tipo è "contatto", invia l'email dal form di contatto
      else if (type === 'contatto') {
        await sendContactFormEmail(formData.name, formData.email, formData.message);
        return res.status(200).json({ message: 'Email di contatto inviata con successo.' });
      }
      // Se il tipo non è riconosciuto, invia un errore
      else {
        return res.status(400).json({ message: 'Tipo di richiesta non valido.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Errore durante l\'invio dell\'email.' });
    }
  } else {
    // Risposta per metodi non consentiti
    res.status(405).json({ message: 'Metodo non consentito.' });
  }
}
