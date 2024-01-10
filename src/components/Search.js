import { renderToString } from 'react-dom/server';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  InstantSearchSSRProvider,
  getServerState,
  Hits,
} from 'react-instantsearch';

function Hit({ hit }) {
  return JSON.stringify(hit);
}

const AlgoliaAppId = 'latency'
const AlgoliaSearchOnlyApiKey = '6be0576ff61c053d5f9a3225e2a90f76'
const AlgoliaIndexName = 'instant_search'

const appId = '9Y3RHNIFAD'
const searchOnlyApiKey = '602c4a47f7f3b3bfd06064bbf6d86ccc'
const indexName = 'netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all'

const searchClient = algoliasearch(
  appId,
  searchOnlyApiKey
);
export default function SearchPage({ serverState }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch searchClient={searchClient} indexName={indexName} >
      <Hits hitComponent={Hit} />
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

export async function getStaticProps() {
  const serverState = await getServerState(<SearchPage />, { renderToString });
  return {
    props: {
      serverState,
    },
  };
}