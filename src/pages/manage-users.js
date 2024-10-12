import { useState, useEffect } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);  // Stato per memorizzare la lista degli utenti
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per gli errori
  const router = useRouter();

  // Funzione per ottenere la lista degli utenti dal database
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, email, role, nome, cognome, created_at');

      if (error) throw error;

      setUsers(data);  // Imposta gli utenti recuperati dallo stato
      setLoading(false);
    } catch (error) {
      setError('Errore nel recupero degli utenti.');
      setLoading(false);
    }
  };

  // Funzione per modificare il ruolo di un utente
  const updateUserRole = async (userId, newRole) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ role: newRole })  // Aggiorna il ruolo dell'utente
        .eq('id', userId);

      if (error) throw error;

      // Aggiorna la lista degli utenti dopo la modifica del ruolo
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, role: newRole } : user
        )
      );

      alert('Ruolo aggiornato con successo.');
    } catch (error) {
      alert('Errore durante l\'aggiornamento del ruolo.');
    }
  };

  // Funzione per eliminare un utente
  const deleteUser = async (userId) => {
    if (!confirm('Sei sicuro di voler eliminare questo utente?')) return;

    try {
      const { error } = await supabase
        .from('users')
        .delete()  // Elimina l'utente dal database
        .eq('id', userId);

      if (error) throw error;

      // Aggiorna la lista degli utenti dopo l'eliminazione
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

      alert('Utente eliminato con successo.');
    } catch (error) {
      alert('Errore durante l\'eliminazione dell\'utente.');
    }
  };

  // Esegui il fetch degli utenti al caricamento del componente
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Caricamento utenti...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">Gestione Utenti</h1>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {users.length > 0 ? (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Ruolo</th>
                <th className="px-4 py-2">Data Creazione</th>
                <th className="px-4 py-2">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-4 text-gray-700">
                    {user.nome} {user.cognome}
                  </td>
                  <td className="px-4 py-4 text-gray-700">{user.email}</td>
                  <td className="px-4 py-4">
                    <select
                      value={user.role}
                      onChange={(e) => updateUserRole(user.id, e.target.value)}
                      className="border border-gray-300 rounded-lg px-2 py-1 text-gray-700"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="px-4 py-4 text-gray-700">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-500 hover:text-red-700 transition-all duration-300"
                    >
                      Elimina
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">Nessun utente trovato.</p>
        )}
      </div>

      {/* Bottone per tornare alla home */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
          onClick={() => router.push('/')}
        >
          Torna alla Home
        </button>
      </div>
    </div>
  );
}
