import nodemailer from 'nodemailer';
import QRCode from 'qrcode';
import { supabase } from './supabaseClient';  // Importa il client di Supabase
import { v4 as uuidv4 } from 'uuid';  // Usa UUID per generare un token univoco

export default async function handler(req, res) {
  try {
    console.log("Metodo richiesta:", req.method);
    console.log("Dati ricevuti nel body:", req.body);

    const formData = req.body;
    if (!formData) {
      console.error("Dati mancanti: formData è null o undefined");
      return res.status(400).json({ error: "Dati di registrazione mancanti" });
    }

    // Genera un token univoco per la partecipazione
    const participationToken = uuidv4();
    console.log("Token di partecipazione generato:", participationToken);

    // Inserisci i dati del partecipante nel database, incluso il token
    const { data, error } = await supabase
      .from('registrations')
      .insert([
        {
          nome: formData.nome,
          cognome: formData.cognome,
          email: formData.email,
          telefono: formData.telefono,
          qualifica: formData.qualifica,
          sessione: formData.sessione,
          note: formData.note || null,
          partecipation_token: participationToken // Salva il token generato
        },
      ]);

    if (error) {
      console.error("Errore durante l'inserimento dei dati nel database:", error);
      return res.status(500).json({ error: "Errore durante la registrazione nel database" });
    }

    console.log("Dati salvati nel database con successo:", data);

    // Genera il QR code con solo il token
    const qrCodeDataUrl = await QRCode.toDataURL(participationToken); // Genera QR code con solo il token
    console.log("QR Code generato con successo");

    // Crea il contenuto dell'email
    const emailContent = `
      Gentile ${formData.nome} ${formData.cognome},

      Ti ringraziamo per aver completato l'iscrizione al **Convegno sulla Digitalizzazione della Giustizia** che si terrà a Capri.
      
      Ecco un riepilogo delle informazioni che hai fornito durante la registrazione:

      **Nome completo:** ${formData.nome} ${formData.cognome}
      **Qualifica:** ${formData.qualifica}
      **Email:** ${formData.email}
      **Telefono:** ${formData.telefono}
      **Sessione scelta:** ${formData.sessione || 'Nessuna'}
      **Note personali:** ${formData.note || 'Nessuna'}
      
      Abbiamo generato un QR code unico che potrai utilizzare per confermare la tua partecipazione all'evento. Troverai il QR code in allegato a questa email.

      Ti aspettiamo con entusiasmo per una giornata ricca di discussioni e innovazione!

      Grazie ancora per la tua partecipazione.

      Un cordiale saluto,
      Il team di organizzazione del Convegno
    `;

    // Configura il trasportatore per inviare l'email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Configura l'email con il contenuto e il QR code in allegato
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: formData.email,
      subject: 'Conferma Iscrizione al Convegno di Digitalizzazione della Giustizia',
      text: emailContent,  // Contenuto del messaggio in formato testo
      attachments: [
        {
          filename: 'qrcode.png',
          content: qrCodeDataUrl.split("base64,")[1],  // QR code in base64
          encoding: 'base64',
        },
      ],
    };

    // Invio dell'email e log per l'invio
    await transporter.sendMail(mailOptions);
    console.log('Email inviata con successo a:', formData.email);

    return res.status(200).json({ message: "Registrazione avvenuta con successo" });

  } catch (error) {
    console.error("Errore durante la registrazione o l'invio dell'email:", error);
    return res.status(500).json({ error: "Errore durante la registrazione o l'invio dell'email" });
  }
}
