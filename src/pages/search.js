import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchClientOnly = dynamic(
  () => import('../components/SearchClientOnly'),
  { ssr: false }
);

export default function SearchPage() {
  return (
    <div className="heropattern-topography-yellow-400 min-h-screen flex flex-col">
      <Head>
        <title>Search the Royal Ridges&#39; website</title>
      </Head>
      <Header />
      <main className="flex-1">
        <SearchClientOnly />
      </main>
      <Footer />
    </div>
  );
}
