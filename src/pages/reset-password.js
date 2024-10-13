import { useState } from 'react';
import { supabase } from './api/supabaseClient';
import Head from 'next/head';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Stato per il debounce

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Disabilita il pulsante per evitare troppi invii
    setIsSubmitting(true);
    setError('');
    setMessage('');

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/reset-password', // URL della tua pagina di reset
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Controlla la tua email per il link di reimpostazione della password.');
    }

    // Reimposta il pulsante dopo un tempo (es. 30 secondi)
    setTimeout(() => {
      setIsSubmitting(false);
    }, 30000); // 30 secondi di attesa prima di poter inviare di nuovo
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
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
            Password dimenticata
          </h1>
          {message && <p className="text-green-500 text-center mb-6">{message}</p>}
          {error && <p className="text-red-500 text-center mb-6">{error}</p>}
          <form onSubmit={handleForgotPassword}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Inserisci la tua email"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{ fontFamily: 'Titillium Web, sans-serif' }}
              disabled={isSubmitting} // Disabilita il pulsante durante il debounce
            >
              {isSubmitting ? 'Attendi...' : 'Reimposta password'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}