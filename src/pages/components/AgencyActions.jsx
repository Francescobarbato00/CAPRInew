import React, { useState } from 'react';

export default function AgencyActions() {
  // Stato per i tab attivi
  const [activeTab, setActiveTab] = useState('Definisce strategie');

  return (
    <section className="bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Titolo principale */}
        <h2 className="text-4xl font-normal text-gray-800 mb-8">
          Programmazione dell'Evento
        </h2>

        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-300 mb-6">
          <button
            className={`text-lg font-semibold pb-2 ${
              activeTab === 'Definisce strategie' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'
            }`}
            onClick={() => setActiveTab('Definisce strategie')}
          >
            Primo Giorno
          </button>
          <button
            className={`text-lg font-semibold pb-2 ${
              activeTab === 'Promuove competenze digitali' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'
            }`}
            onClick={() => setActiveTab('Promuove competenze digitali')}
          >
            Secondo Giorno
          </button>
          <button
            className={`text-lg font-semibold pb-2 ${
              activeTab === 'Monitora e vigila' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'
            }`}
            onClick={() => setActiveTab('Monitora e vigila')}
          >
            Eventi Ludici
          </button>
        </div>

        {/* Contenuto dinamico in base al tab attivo */}
        <div>
          {activeTab === 'Definisce strategie' && (
            <div>
              <p className="text-gray-700 mb-4">
                <strong>VENERDI 4 OTTOBRE</strong><br />
                Evento Lavoro<br />
                "Questioni di diritto e processo del lavoro, nell’era della rivoluzione tecnologica"<br />
                Capri Sala Pollio - 4 ottobre 2024<br /><br />
                <strong>14:30</strong><br />
                Inizio dei lavori<br />
                Brevi interventi di:<br />
                - Marco Biasi, Prof. Associato di diritto del lavoro Università degli Studi di Milano.<br />
                - Marco Giacalone, Professore di ricerca Dipartimento di diritto privato ed economia del diritto (PREC) Università libera di Bruxelles (VUB).<br />
                - Milena Doriano, assistente di studio presso la Corte Costituzionale, "Il lavoro su piattaforma".<br />
                - Valentina Ricchezza, Giudice del lavoro del Tribunale di Santa Maria Capua Vetere, "Algoritmi e discriminazione di genere nel mondo del lavoro".<br />
                - Luca Caputo, Giudice della sezione lavoro del Tribunale di Trani.<br />
                - Silvia Burelli, Consigliere Corte di appello di Venezia.<br />
                - Paola Marino, Giudice della sezione lavoro del Tribunale di Palermo.<br />
                - Carmen di Carluccio, ricercatrice Università Vanvitelli.<br />
                - Mario Quaranta, Avv. Foro di Napoli.<br />
                - Chiara Cucinella, Giudice del lavoro tribunale Napoli Nord.<br />
                - Federica Porcelli, Giudice del Tribunale.<br />
                - Maria Gallo, Presidente Sezione lavoro Tribunale di Napoli.<br /><br />
                Coordina Pietro Curzio, Presidente Emerito Corte di Cassazione<br /><br />
                <strong>17:00</strong><br />
                Tavola rotonda conclusiva: L’impatto della rivoluzione tecnologica sul diritto e processo del lavoro.<br />
                Intervengono:<br />
                - Giovanni Amoroso, Giudice della Corte Costituzionale.<br />
                - Raffaele De Luca Tamajo, Prof. Avv. Emerito di diritto del lavoro, Università di Napoli Federico II.<br />
                - Lorenzo Zoppoli, Ordinario di diritto del lavoro, Università di Napoli Federico II.<br /><br />
                <strong>17:50</strong><br />
                Chiusura dei lavori
              </p>
            </div>
          )}
          {activeTab === 'Promuove competenze digitali' && (
            <div>
              <p className="text-gray-700 mb-4">
                <strong>SABATO 5 OTTOBRE</strong><br />
                Evento Digitalizzazione<br />
                "La Giustizia moderna alla luce dei Regolamenti adottati dall’UE nel Decennio Digitale"<br />
                Certosa di San Giacomo - 5 ottobre 2024<br /><br />
                <strong>08:45</strong><br />
                Accoglienza in Certosa di San Giacomo<br />
                Benvenuto da parte delle autorità locali, civili e giudiziarie:<br />
                - Pierfrancesco Talamo: Direttore Certosa<br />
                - Paolo Falco: Sindaco di Capri<br />
                - Maria Rosaria Covelli: Presidente della Corte di Appello di Napoli<br />
                - Antonio Gialanella, Procuratore Generale ff. della Corte di Appello di Napoli<br /><br />
                <strong>09:00</strong><br />
                Saluti introduttivi dei promotori:<br />
                - Margherita Cassano, Prima Presidente della Corte di Cassazione.<br />
                - Luigi Maruotti, Presidente del Consiglio di Stato.<br />
                - Carolina Lussana, Presidente del Consiglio di Presidenza della Giustizia Tributaria.<br />
                - Francesco Greco, Presidente del Consiglio Nazionale Forense (CNF).<br />
                - Giulio Biino, Presidente del Consiglio Nazionale del Notariato (CNN).<br /><br />
                <strong>09:45</strong><br />
                Intervento del Sig. Ministro della Giustizia Carlo Nordio<br /><br />
                <strong>10:00</strong><br />
                PRIMO FOCUS: "L'Identità e domicilio digitali, presupposti per ogni negozio, procedimento e processo digitali"<br />
                Interviste a:<br />
                - Ferruccio Auletta, Professore ordinario di diritto processuale civile Dipartimento Giurisprudenza LUISS "Guido Carli" di Roma.<br />
                - Vincenzo Gunnella, Presidente del CdA di Notartel S.p.a.<br />
                - Carolina Scarano, Vice Presidente FIIF.<br />
                - Antonino Mazzeo, Professore emerito Università di Napoli Federico II.<br />
                Keynote speech: Antonella Ciriello, Consigliere della Corte di Cassazione e Consulente del Ministro della Giustizia.<br /><br />
                <strong>10:50</strong><br />
                SECONDO FOCUS: Stato della digitalizzazione della giustizia in Italia e in Europa<br />
                Interviste a:<br />
                - Ettore Sala, Capo Dipartimento DIT, Ministero della Giustizia.<br />
                - Maria Vittoria Marchianò, Presidente della Settima Commissione del CSM.<br />
                - Brunella Bruno, Consigliera di Stato.<br />
                - Ines Marini, Vice Presidente della Scuola Superiore della Magistratura.<br />
                - Francesco Pizzuto, Consigliere Nazionale Forense.<br />
                Keynote speech: Ileana Fedele e Alessio Scarcella, Consiglieri della Corte di Cassazione.<br /><br />
                <strong>12:00</strong><br />
                TERZO FOCUS: L'intelligenza artificiale, un pericolo o una sfida per i diritti umani?<br />
                Interviste a cura di Raffaella Calandra a:<br />
                - Raffaele Sabato, Giudice della Corte Europea dei Diritti dell'Uomo.<br />
                - Pasquale Stanzione, Presidente del Garante per la protezione dei dati personali.<br />
                - Francesca Quadri, Capo Dipartimento affari giuridici e legislativi, Presidenza del Consiglio dei Ministri.<br />
                - Bruno Frattasi, Direttore Generale dell'Agenzia per la cybersicurezza nazionale.<br />
                - Antonio Mura, Capo Ufficio legislativo Ministero della Giustizia.<br />
                Keynote speech: Mario Nobile, Direttore Generale dell'Agenzia per l'Italia Digitale.<br /><br />
                <strong>13:45</strong><br />
                Light lunch nel Chiostro piccolo della Certosa.<br /><br />
                <strong>14:45</strong><br />
                Divisione nei GRUPPI DI DISCUSSIONE<br />
                Gruppo 1: L'innovazione e la digitalizzazione nel diritto e processo civile.<br />
                Gruppo 2: L'innovazione e la digitalizzazione del processo penale.<br />
                Gruppo 3: Processo Telematico ed Intelligenza Artificiale.<br />
                Gruppo 4: L'intelligenza artificiale.<br />
                Gruppo 5: Europe’s Digital Decade.<br />
                Gruppo 6: Interventi video registrati.<br /><br />
                <strong>17:30</strong><br />
                Chiusura dei lavori.
              </p>
            </div>
          )}
          {activeTab === 'Monitora e vigila' && (
            <div>
              <p className="text-gray-700 mb-4">
                <strong>Passeggiata guidata (da prenotare)</strong><br />
                <em>n.b. non è stato organizzato il percorso ad Anacapri per ragioni logistiche</em><br />
                VISITA GRATUITA DEL BORGO DI CAPRI con il prof. Renato Esposito.<br />
                La visita inizierà alle ore 10:15 sotto il campanile con la storia della Piazza e del Borgo.<br />
                Proseguirà poi, alle 11:15, con la visita al Museo Archeologico della Certosa (INGRESSO GRATUITO).<br />
                Maggiori informazioni al link: L'Isola dei Cesari.<br /><br />
                <strong>Attività eventuali (dipendenti dal meteo)</strong><br />
                <strong>Bagno e Pranzo:</strong> se il meteo lo permetterà, sarà organizzato un bagno al Lido Lo Smeraldo (Marina Grande, tel. 081 8375072).<br />
                Il pranzo potrà essere organizzato presso il ristorante Lo Smeraldo o allo Zaffiro (da confermare).<br />
                I partecipanti interessati sono pregati di contattare direttamente telefonando al lido o ai ristoranti (stessa gestione).<br /><br />
                <strong>Giro dell'isola:</strong> il giro in barca sarà confermato in base alle condizioni meteo. In caso di conferma, la partenza sarà dal Molo 1 del porto di Marina Grande con i motoscafisti capresi.<br /><br />
                Per qualsiasi ulteriore informazione o dettaglio, non esitate a contattarci a: <a href="mailto:eventodigitalizzazionecapri@gmail.com">eventodigitalizzazionecapri@gmail.com</a>.<br /><br />
                
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
