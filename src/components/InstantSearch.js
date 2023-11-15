import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  InstantSearchSSRProvider,
} from 'react-instantsearch';
//import { history } from 'instantsearch.js/es/lib/routers/index.js';
import singletonRouter from 'next/router';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';

const searchClient = algoliasearch(
  '9Y3RHNIFAD',
  '602c4a47f7f3b3bfd06064bbf6d86ccc'
);

export default function SearchPage({ serverState, serverUrl }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={searchClient}
        indexName='YourIndexName'
        routing={{
          router: createInstantSearchRouterNext({
            singletonRouter,
            serverUrl,
          }),
        }}
      >
        {/* Widgets */}
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}
