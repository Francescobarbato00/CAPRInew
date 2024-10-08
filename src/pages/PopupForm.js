// components/PopupForm.js

import { useState } from "react";

export default function PopupForm() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // logica per inviare i dati del form
    console.log("Form submitted");
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Apri Form di Iscrizione
      </button>

      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Form di Iscrizione</h2>
              <button
                className="text-gray-700"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Cognome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Inserisci il cognome"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Inserisci il nome"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Qualifica</label>
                <select className="w-full px-4 py-2 border rounded-md">
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
                  
                  {/* Aggiungere altre opzioni */}
                  <option value="Altro">Altro</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Indirizzo Mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Inserisci la mail"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Numero di Telefono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Inserisci il numero di telefono"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Parteciperò alla sessione del 4 ottobre
                </label>
                <select className="w-full px-4 py-2 border rounded-md">
                  <option value="4 ottobre">Sessione del 4 ottobre</option>
                  <option value="5 ottobre">Sessione del 5 ottobre</option>
                  <option value="nessuna">Nessuna</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Parteciperò al gruppo tematico
                </label>
                <select className="w-full px-4 py-2 border rounded-md">
                  <option value="1">
                    L’innovazione e la digitalizzazione del processo tributario
                  </option>
                  <option value="2">
                    L’innovazione e la digitalizzazione nel diritto e processo
                    civile
                  </option>
                  <option value="3">
                    L’innovazione e la digitalizzazione del processo penale
                  </option>
                  <option value="4">
                    Casi d'uso dell'intelligenza artificiale nella giustizia
                  </option>
                  <option value="nessuno">A nessuno dei gruppi</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Parteciperò alla cena del 4 ottobre
                </label>
                <input type="checkbox" className="mr-2" /> Sì
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Parteciperò alla cena del 5 ottobre
                </label>
                <input type="checkbox" className="mr-2" /> Sì
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Note
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Inserisci eventuali note"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Invia
              </button>
            </form>
          </div>
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
        </div>
      ) : null}
    </>
  );
}
