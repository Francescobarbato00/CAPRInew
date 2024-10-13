import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './api/supabaseClient';

export default function ConfirmEmail() {
  const router = useRouter();
  const { token } = router.query; // Ottieni il token dalla query string
  const [confirmationStatus, setConfirmationStatus] = useState(null);

  useEffect(() => {
    if (token) {
      confirmUserEmail();
    }
  }, [token]);

  const confirmUserEmail = async () => {
    const { data, error } = await supabase.auth.verifyOTP({
      token, 
      type: 'signup'
    });

    if (error) {
      setConfirmationStatus('error');
      console.error('Errore durante la conferma email:', error);
    } else {
      setConfirmationStatus('success');
      router.push('/login'); // Reindirizza al login dopo la conferma
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {confirmationStatus === 'success' && (
        <h1 className="text-3xl font-semibold mb-6">Email confermata con successo!</h1>
      )}
      {confirmationStatus === 'error' && (
        <h1 className="text-3xl font-semibold text-red-600 mb-6">Errore nella conferma dell'email.</h1>
      )}
      {!confirmationStatus && (
        <h1 className="text-3xl font-semibold mb-6">Verifica in corso...</h1>
      )}
    </div>
  );
}
