import Link from 'next/link';

import { renderToString } from 'react-dom/server';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  InstantSearchSSRProvider,
  getServerState,
  Hits,
  SearchBox,
  Snippet,
} from 'react-instantsearch';

function Hit({ hit }) {
  return (
    <div className='max-w-5xl mx-auto bg-gray-50 opacity-90'>
      <h1>
        <Snippet attribute='content' hit={hit} />
        <Link href={hit.pathname} className='font-extrabold'>
          {hit.title}
        </Link>
      </h1>
      <p className='w-1/3 h-40 p-4 text-ellipsis overflow-hidden '>
        {hit.content}
      </p>
    </div>
  );
}

const appId = '9Y3RHNIFAD';
const searchOnlyApiKey = '602c4a47f7f3b3bfd06064bbf6d86ccc';
const indexName =
  'netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all';

const searchClient = algoliasearch(appId, searchOnlyApiKey);
export default function SearchPage() {
  return (
    <InstantSearchSSRProvider>
      <InstantSearch
        searchClient={searchClient}
        indexName={indexName}
      >
        <div className='top-0 sticky z-10'>
          <SearchBox
            placeholder='Search parameter'
            classNames={{
              root: 'p-3 shadow-sm',
              form: 'mt-8 pl-8',
              input:
                'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
              submitIcon: 'absolute top-0 left-0 bottom-0 w-6',
            }}
          />
        </div>
        <div className='h-screen overflow-y-scroll'>
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

export async function getStaticProps() {
  const serverState = await getServerState(<SearchPage />, {
    renderToString,
  });
  return {
    props: {
      serverState,
    },
  };
}
