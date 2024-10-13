import { useState } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';
import Head from 'next/head'; // Aggiunta per gestire il font

export default function Register() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Creazione dell'utente su Supabase
    const { error: signUpError, data: signUpData } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      // Verifica se l'utente è stato creato con successo e ottieni il suo ID
      const user = signUpData.user;

      if (user) {
        // Inserisci i dettagli dell'utente nella tabella users (senza password)
        const { error: insertError } = await supabase
          .from('users')
          .insert([
            { 
              id: user.id, // Usa lo stesso ID generato da Supabase Auth
              nome,
              cognome,
              email,
              role: 'user' // Ruolo predefinito 'user'
            }
          ]);

        if (insertError) {
          setError(insertError.message);
        } else {
          router.push('/login'); // Dopo la registrazione, reindirizza al login
        }
      } else {
        setError('Errore nel recupero dell\'utente. Riprova più tardi.');
      }
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full sm:w-full md:w-full lg:w-3/4 xl:w-1/2">
          <h1
            className="text-4xl font-bold text-center text-gray-800 mb-8"
            style={{ fontFamily: 'Titillium Web, sans-serif' }}
          >
            Registrati
          </h1>
          {error && <p className="text-red-500 text-center mb-6">{error}</p>}
          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Titillium Web, sans-serif' }}
              >
                Nome
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Inserisci il tuo nome"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Titillium Web, sans-serif' }}
              >
                Cognome
              </label>
              <input
                type="text"
                value={cognome}
                onChange={(e) => setCognome(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Inserisci il tuo cognome"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Titillium Web, sans-serif' }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Inserisci la tua email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: 'Titillium Web, sans-serif' }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Inserisci la tua password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              style={{ fontFamily: 'Titillium Web, sans-serif' }}
            >
              Registrati
            </button>
          </form>

          <button
            onClick={() => router.push('/')}
            className="mt-4 w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            style={{ fontFamily: 'Titillium Web, sans-serif' }}
          >
            Torna alla Home
          </button>
        </div>
      </div>
    </>
  );
}
