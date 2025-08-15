// pages/search.js
import Head from 'next/head';
import { renderToString } from 'react-dom/server';
import { getServerState } from 'react-instantsearch';

import SearchPage, { SearchContent } from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Search({ serverState }) {
  return (
    <div className='heropattern-topography-yellow-400'>
      <Head>
        <title>Search the Royal Ridges&#39; website</title>
      </Head>

      <Header />

      {/* pass serverState down */}
      <SearchPage serverState={serverState} />

      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const serverState = await getServerState(<SearchContent />, {
    renderToString,
  });
  return { props: { serverState } };
}
