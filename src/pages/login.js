import { useState } from 'react';
import { supabase } from './api/supabaseClient';
import { useRouter } from 'next/router';
import Head from 'next/head'; // Aggiunta per gestire il font

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/'); // Reindirizza l'utente dopo il login
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
      <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
              Login
            </h1>
            {error && <p className="text-red-500 text-center mb-6">{error}</p>}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
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
                Login
              </button>
            </form>
            <button
              onClick={() => router.push('/registers')}
              className="mt-4 w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
              style={{ fontFamily: 'Titillium Web, sans-serif' }}
            >
              Non hai un account? Registrati
            </button>
            <button
              onClick={() => router.push('/forgot-password')}
              className="mt-4 w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
              style={{ fontFamily: 'Titillium Web, sans-serif' }}
            >
              Hai dimenticato la password? Reimpostala!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
