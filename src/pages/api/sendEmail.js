// src/pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

// Funzione per il primo form (iscrizione al convegno)
export const sendConfirmationEmail = async (email, formData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Il tuo indirizzo Gmail
        pass: process.env.GMAIL_PASS, // La tua password Gmail o App Password
      },
    });

    const validationUrl = `https://iltuosito.com/validate?id=${formData.id}`;
    const qrCodeDataUrl = await QRCode.toDataURL(validationUrl);

    const mailOptions = {
      from: process.env.GMAIL_USER, 
      to: email, 
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
          content: qrCodeDataUrl.split("base64,")[1],
          encoding: 'base64',
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log('Email inviata con successo a:', email);
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email:', error);
  }
};

// Funzione per il secondo form (form di contatto)
export const sendContactFormEmail = async (formData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Il tuo indirizzo Gmail
        pass: process.env.GMAIL_PASS, // La tua password Gmail o App Password
      },
    });

    const mailOptions = {
      from: formData.email, // Email del mittente (chi invia il messaggio dal form di contatto)
      to: process.env.GMAIL_USER, // La tua email
      subject: `Nuovo messaggio da ${formData.name}`, // Oggetto dell'email
      text: `Hai ricevuto un nuovo messaggio dal form di contatto del sito:

Nome: ${formData.name}
Email: ${formData.email}
Messaggio: ${formData.message}

Ricorda di rispondere al mittente all'indirizzo: ${formData.email}.
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email di contatto inviata con successo da:', formData.email);
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email di contatto:', error);
  }
};

// Funzione di gestione delle richieste API (Next.js)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { type, formData } = req.body;

    try {
      if (type === 'confermaIscrizione') {
        await sendConfirmationEmail(formData.email, formData);
        return res.status(200).json({ message: 'Email di conferma inviata con successo.' });
      } else if (type === 'contatto') {
        await sendContactFormEmail(formData);
        return res.status(200).json({ message: 'Email di contatto inviata con successo.' });
      } else {
        return res.status(400).json({ message: 'Tipo di richiesta non valido.' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Errore durante l\'invio dell\'email.' });
    }
  } else {
    return res.status(405).json({ message: 'Metodo non consentito.' });
  }
}
