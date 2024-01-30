import { renderToString } from 'react-dom/server';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  InstantSearchSSRProvider,
  getServerState,
  Hits,
  SearchBox,
} from 'react-instantsearch';

import SearchHit from '../components/SearchHit';

function Hit({ hit }) {
  return JSON.stringify(hit);
}

const appId = '9Y3RHNIFAD';
const searchOnlyApiKey = '602c4a47f7f3b3bfd06064bbf6d86ccc';
const indexName =
  'netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all';

const searchClient = algoliasearch(appId, searchOnlyApiKey);
export default function SearchPage({ serverState }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indexName}
      >
        <SearchBox
          placeholder='Search parameter'
          className='bg-red-200 flex justify-center'
        />
        <Hits hitComponent={SearchHit} />
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
