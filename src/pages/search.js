// pages/search.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchPage, {
  SearchContent,
  getServerState,
  renderToString,
} from '../components/Search';

export default function Search({ serverState }) {
  return (
    <div className='heropattern-topography-yellow-400 min-h-screen flex flex-col'>
      <Head>
        <title>Search the Royal Ridges&#39; website</title>
      </Head>
      <Header />
      <main className='flex-1'>
        <SearchPage serverState={serverState} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const raw = await getServerState(<SearchContent />, {
    renderToString,
  });

  // Remove all `undefined` to satisfy Next's JSON serialization
  const serverState = JSON.parse(
    JSON.stringify(raw, (_k, v) => (v === undefined ? null : v))
  );

  return { props: { serverState } };
}
