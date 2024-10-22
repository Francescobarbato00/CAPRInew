import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './api/supabaseClient'; // Assicurati che punti correttamente al client di Supabase
import Head from 'next/head';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { token } = router.query; // Ottiene il token dall'URL

  // Effettua il reset della password quando l'utente sottomette il form
  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Le password non corrispondono.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setMessage('');

    // Verifica se il token è presente
    if (!token) {
      setError('Token di reset non valido o mancante.');
      setIsSubmitting(false);
      return;
    }

    // Aggiorna la password tramite Supabase utilizzando il token
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Password reimpostata con successo. Ora puoi accedere con la nuova password.');
      setTimeout(() => {
        router.push('/login'); // Reindirizza l'utente alla pagina di login
      }, 3000); // Attendere 3 secondi e poi reindirizzare
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    // Se non c'è un token valido nell'URL, reindirizza alla pagina di login
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Reimposta Password</h1>
          {message && <p className="text-green-500 text-center mb-6">{message}</p>}
          {error && <p className="text-red-500 text-center mb-6">{error}</p>}
          <form onSubmit={handlePasswordReset}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nuova Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Inserisci la nuova password"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Conferma Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Conferma la nuova password"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Reimpostando...' : 'Reimposta password'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
