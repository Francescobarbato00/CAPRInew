import React, { useState, useEffect } from 'react';
import { supabase } from '../api/supabaseClient';
import Link from 'next/link';

const Comunicazione = () => {
    const [comunicazioni, setComunicazioni] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComunicazioni = async () => {
            const { data, error } = await supabase
                .from('comunicazioni') // Nome della tua tabella comunicazioni
                .select('*')
                .order('created_at', { ascending: false }); // Ordina per data di creazione

            if (error) {
                console.error('Errore nel recupero delle comunicazioni:', error.message);
            } else {
                setComunicazioni(data);
            }
            setLoading(false);
        };

        fetchComunicazioni();
    }, []);

    return (
        <div style={{ fontFamily: "'Titillium Web', sans-serif", color: 'rgb(26, 26, 26)', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            {/* Sezione Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '50px' }}>
                <div>
                    <h1 style={{ fontSize: '64px', fontWeight: '400', lineHeight: '72px', marginBottom: '0' }}>Comunicazione</h1>
                </div>
                <div style={{ maxWidth: '600px', textAlign: 'right' }}>
                    <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)', margin: '0' }}>
                        In questa sezione puoi consultare notizie, eventi, comunicazioni tecniche e pubblicazioni sulla trasformazione digitale,
                        l’innovazione tecnologica, le attività e le strategie per l’innovazione promosse nel Convegno.
                    </p>
                </div>
            </header>

            {/* Barra di navigazione */}
            <nav style={{ marginBottom: '30px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
                <ul style={{ display: 'flex', justifyContent: 'left', listStyle: 'none', padding: '0', marginBottom: '0' }}>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/news">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>News</span>
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/eventi">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>Eventi</span>
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/comunicazioni-tecniche">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>Comunicazioni Tecniche</span>
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/pubblicazioni">
                            <span style={{ textDecoration: 'none', color: 'rgb(0, 102, 204)', fontWeight: '400', fontSize: '24px', lineHeight: '40px' }}>Pubblicazioni</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Sezione Articoli dinamici */}
            {loading ? (
                <p>Caricamento delle comunicazioni...</p>
            ) : (
                <section style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginBottom: '50px', flexWrap: 'wrap' }}>
                    {comunicazioni.map((comunicazione) => (
                        <div
                            key={comunicazione.id}
                            style={{
                                width: '32%',
                                backgroundColor: '#fff',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '20px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                marginBottom: '20px'
                            }}
                        >
                            <img
                                src={comunicazione.image_url || '/placeholder.jpg'} // Usa una immagine placeholder se non esiste un URL
                                alt={comunicazione.title}
                                style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '15px' }}
                            />
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                {/* Tags dinamici, se esistono */}
                                {comunicazione.tags && comunicazione.tags.split(',').map((tag, idx) => (
                                    <span key={idx} style={{ background: '#e0e0e0', padding: '5px 10px', borderRadius: '5px', fontSize: '14px', fontWeight: '500', color: '#333' }}>
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                            <h3 style={{ fontSize: '32px', fontWeight: '400', lineHeight: '45px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                                {comunicazione.title}
                            </h3>
                            <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '28px', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                                {comunicazione.description}
                            </p>
                            <Link href={`/comunicazioni/${comunicazione.slug}`}>
                                <span style={{ textDecoration: 'none', color: '#0073e6', fontWeight: '400', fontSize: '18px', cursor: 'pointer' }}>VAI ALL'ARTICOLO →</span>
                            </Link>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}

export default Comunicazione;
