import React, { useState } from 'react';
import Head from 'next/head';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Qual è la data dell\'evento?',
      answer: 'L\'evento si svolgerà nei giorni 4 e 5 ottobre 2024. Durante queste due giornate, i partecipanti avranno la possibilità di seguire vari seminari e workshop relativi alla digitalizzazione e all’innovazione tecnologica. Tuttavia, per coloro che volessero prolungare la loro permanenza, il 6 ottobre saranno organizzate attività ricreative ed eventi ludici. Si tratterà di esperienze pensate per godere delle bellezze di Capri, tra cui visite guidate, escursioni e degustazioni. La partecipazione a queste attività extra sarà subordinata alla compilazione del modulo di iscrizione dedicato, che troverai nella sezione "Eventi" del sito.'
    },
    {
      question: 'Dove si svolgerà l\'evento?',
      answer: 'L\'evento si terrà in due location suggestive dell\'isola di Capri: la Certosa di San Giacomo e la Sala Pollio. La Certosa, un antico monastero fondato nel 1371, ospiterà i workshop e le conferenze principali, offrendo un contesto storico unico per discutere di tecnologia e innovazione. La Sala Pollio, situata nel cuore di Capri, sarà invece il luogo designato per le sessioni pratiche e i laboratori interattivi. Entrambe le location sono facilmente raggiungibili dal centro di Capri e saranno segnalate con appositi cartelli e punti informativi.'
    },
    {
      question: 'Come posso iscrivermi all\'evento?',
      answer: 'Per iscriverti all\'evento, è necessario compilare il form di iscrizione disponibile sulla homepage del nostro sito. Prima di accedere al modulo, dovrai effettuare la registrazione e il login con le tue credenziali. L\'iscrizione è semplice e veloce: basta inserire i tuoi dati personali e scegliere le sessioni a cui desideri partecipare. Una volta completata l\'iscrizione, riceverai una email di conferma con tutti i dettagli dell\'evento e un pass virtuale che ti consentirà di accedere ai vari spazi riservati ai partecipanti.'
    },
    {
      question: 'Ci sono costi di partecipazione?',
      answer: 'La partecipazione all\'evento è completamente gratuita. Tuttavia, per motivi organizzativi e per garantire un\'esperienza ottimale a tutti i partecipanti, è richiesta la compilazione del modulo di iscrizione. Il numero di posti è limitato, quindi ti consigliamo di iscriverti il prima possibile per assicurarti un posto alle sessioni che ti interessano di più. Nel caso in cui le iscrizioni raggiungano il numero massimo di partecipanti, sarà attivata una lista d\'attesa e verrai informato via email in caso di disponibilità.'
    },
    {
      question: 'Come posso contattare l\'organizzazione?',
      answer: 'Puoi metterti in contatto con l\'organizzazione in qualsiasi momento tramite email, inviando un messaggio all\'indirizzo eventodigitalizzazionecapri@gmail.com. Il nostro team è a tua disposizione per rispondere a qualsiasi domanda, chiarire eventuali dubbi o fornirti maggiori informazioni sull\'evento. Inoltre, puoi seguire gli aggiornamenti sulle nostre pagine social, dove pubblichiamo regolarmente novità, notizie e approfondimenti sull\'evento e sui temi trattati.'
    }
  ];

  return (
    <>
      <Head>
        <title>Domande Frequenti - Digitalizzazione Capri</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <h1>DOMANDE FREQUENTI</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h2
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </h2>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Titillium Web', sans-serif;
          background-color: #fff;
          color: #000;
        }

        h1 {
          font-size: 44px;
          font-weight: 700;
          color: rgb(26, 26, 26);
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-list {
          margin-top: 20px;
        }

        .faq-item {
          border-bottom: 1px solid #ccc;
          padding: 15px 0;
        }

        .faq-question {
          font-size: 22px;
          font-weight: 600;
          color: rgb(0, 102, 204);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .faq-question:hover {
          color: rgb(0, 153, 255);
        }

        .faq-answer {
          font-size: 18px;
          font-weight: 300;
          color: rgb(47, 71, 94);
          line-height: 1.6;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }

          h1 {
            font-size: 36px;
          }

          .faq-question {
            font-size: 20px;
          }

          .faq-answer {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 32px;
          }

          .faq-question {
            font-size: 18px;
          }

          .faq-answer {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default FAQ;
