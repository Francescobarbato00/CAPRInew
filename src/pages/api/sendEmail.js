// src/pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

export const sendConfirmationEmail = async (email, formData) => {
  try {
    // Crea il trasportatore per inviare le email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Il tuo indirizzo Gmail
        pass: process.env.GMAIL_PASS, // La tua password Gmail o App Password
      },
    });

    // Crea un URL univoco per la validazione del partecipante
    const validationUrl = `https://iltuosito.com/validate?id=${formData.id}`;

    // Genera il QR code con l'URL di validazione
    const qrCodeDataUrl = await QRCode.toDataURL(validationUrl);

    // Contenuto dell'email
    const mailOptions = {
      from: process.env.GMAIL_USER, // Il tuo indirizzo Gmail
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

      // Aggiungi l'immagine del QR Code come allegato
      attachments: [
        {
          filename: 'qrcode.png',
          content: qrCodeDataUrl.split("base64,")[1], // Rimuove il prefisso del data URL
          encoding: 'base64',
        },
      ],
    };

    // Invia l'email e stampa un messaggio di successo
    await transporter.sendMail(mailOptions);
    console.log('Email inviata con successo a:', email);
  } catch (error) {
    // Log dell'errore
    console.error('Errore durante l\'invio dell\'email:', error);
  }
};
