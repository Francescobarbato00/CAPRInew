import { supabase } from '../api/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Caricamento...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16" style={{ fontFamily: "'Titillium Web', sans-serif" }}>
      {/* Titolo dell'articolo */}
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

      {/* Immagine dell'articolo */}
      {article.image_url && (
        <div className="mb-8">
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Data di creazione */}
      <p className="text-gray-500 mb-6">
        {new Date(article.created_at).toLocaleDateString()}
      </p>

      {/* Contenuto dell'articolo */}
      <div className="prose prose-lg max-w-full text-gray-800">
        {article.content}
      </div>

      {/* Bottone per tornare all'infoSection */}
      <div className="mt-12">
        <Link href="/infoSection" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
          Torna a InfoSection
        </Link>
      </div>
    </div>
  );
}

// Funzione per recuperare i dati dell'articolo
export async function getStaticPaths() {
  const { data: articles } = await supabase.from('news').select('slug');

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: true, // Se un articolo non è pre-renderizzato, mostra una pagina di fallback
  };
}

export async function getStaticProps({ params }) {
  const { data: article } = await supabase
    .from('news')
    .select('*')
    .eq('slug', params.slug)
    .single();

  return {
    props: {
      article,
    },
    revalidate: 10, // ISR ogni 10 secondi
  };
}
