import { useState } from 'react';
import Head from 'next/head';

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    qualifica: '',
    email: '',
    telefono: '',
    sessione: '',
    gruppoTematico: '',
    note: '',
  });

  // Gestisce il cambiamento degli input del form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gestisce l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Iscrizione avvenuta con successo. Controlla la tua email per la conferma.');
        setShowModal(false); // Chiude il popup dopo l'invio
      } else {
        const data = await response.json();
        alert(`Errore: ${data.message}`);
      }
    } catch (error) {
      console.error('Errore durante l\'invio dei dati:', error);
      alert('Errore durante l\'invio dei dati');
    }
  };

  return (
    <>
      {/* Aggiungi il font Titillium Web solo per questo componente */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="relative min-h-screen flex flex-col justify-center items-center">
        {/* Video di sfondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/Capri4k2.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay blu fisso con opacità minore */}
        <div className="absolute inset-0 bg-blue-900 opacity-70 z-10"></div>

        {/* Contenuto con font Titillium Web */}
        <div
          className="relative z-20 text-white flex flex-col justify-center items-center px-4 md:px-0"
          style={{ fontFamily: "'Titillium Web', sans-serif" }}
        >
          {/* Titolo principale */}
          <h1
            className="text-3xl md:text-5xl font-light text-center mb-8 md:mb-16"
            style={{ fontWeight: 300 }}
          >
            L'Evento annuale sulla Digitalizzazione della Giustizia
          </h1>

          {/* Sottotitolo */}
          <h3
            className="text-2xl md:text-5xl font-light text-center mb-8 md:mb-16"
            style={{ fontWeight: 300 }}
          >
            Capri 2025
          </h3>

          {/* Bottone per aprire il form */}
          <div className="text-center" onClick={() => setShowModal(true)}>
            <div className="w-12 h-12 mb-4 bg-blue-700 rounded-full flex justify-center items-center mx-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer shadow-lg">
              <span className="text-3xl text-white">+</span>
            </div>
            <h2
              className="text-lg md:text-xl font-bold mb-2"
              style={{ fontWeight: 600 }}
            >
              Iscriviti al Convegno
            </h2>
            <p className="text-sm md:text-base" style={{ fontWeight: 400 }}>
              L'adesione al convegno dovrà essere effettuata tramite la compilazione del form
            </p>
          </div>
        </div>
      </section>

      {/* Modal del form con stile migliorato */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-xl p-6 relative z-20 transition-transform duration-300 transform mx-4 md:mx-auto overflow-auto" style={{ maxHeight: '90vh' }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Iscriviti al Convegno</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Cognome</label>
                <input
                  name="cognome"
                  type="text"
                  value={formData.cognome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Inserisci il cognome"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Nome</label>
                <input
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Inserisci il nome"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Qualifica</label>
                <select
                  name="qualifica"
                  value={formData.qualifica}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                >
                  <option value="">Seleziona la qualifica</option>
                  <option value="MAGISTRATO ORDINARIO">Magistrato Ordinario</option>
                  <option value="MAGISTRATO ONORARIO">Magistrato Onorario</option>
                  <option value="MAGISTRATO AMMINISTRATIVO">Magistrato Amministrativo</option>
                  <option value="MAGISTRATO TRIBUTARIO">Magistrato Tributario</option>
                  <option value="MAGISTRATO DELLA CORTE DEI CONTI">Magistrato della Corte dei Conti</option>
                  <option value="INFORMATICO">Informatico</option>
                  <option value="AMMINISTRATIVO">Amministrativo</option>
                  <option value="AVVOCATO LIBERO FORO">Avvocato Libero Foro</option>
                  <option value="AVVOCATURA DELLO STATO">Avvocatura dello Stato</option>
                  <option value="PROFESSORE UNIVERSITARIO">Professore Universitario</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Indirizzo Mail</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Inserisci la mail"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Numero di Telefono</label>
                <input
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Inserisci il numero di telefono"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Sessione</label>
                <select
                  name="sessione"
                  value={formData.sessione}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                >
                  <option value="4 ottobre">Sessione del 4 ottobre</option>
                  <option value="5 ottobre">Sessione del 5 ottobre</option>
                  <option value="nessuna">Nessuna</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Gruppo Tematico</label>
                <select
                  name="gruppoTematico"
                  value={formData.gruppoTematico}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="1">L’innovazione e la digitalizzazione del processo tributario</option>
                  <option value="2">L’innovazione e la digitalizzazione nel diritto e processo civile</option>
                  <option value="3">L’innovazione e la digitalizzazione del processo penale</option>
                  <option value="4">Casi d'uso dell'intelligenza artificiale nella giustizia</option>
                  <option value="nessuno">A nessuno dei gruppi</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Note</label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Inserisci eventuali note"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
              >
                Invia
              </button>
            </form>
          </div>

          {/* Overlay scuro dietro il modal */}
          <div className="fixed inset-0 bg-gray-900 opacity-60 z-10"></div>
        </div>
      )}
    </>
  );
}
