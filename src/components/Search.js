// components/Search.js
import Link from 'next/link';
import { renderToString } from 'react-dom/server';

// Namespace imports so we don't assume export shape
import * as AlgoliaBrowser from 'algoliasearch/lite';
import * as AlgoliaNode from 'algoliasearch';

import {
  InstantSearch,
  InstantSearchSSRProvider,
  getServerState,
  Hits,
  SearchBox,
  Snippet,
} from 'react-instantsearch';

// Pick module by environment, then pick the function by name or default
function getAlgoliaSearch() {
  const mod =
    typeof window === 'undefined' ? AlgoliaNode : AlgoliaBrowser;
  return mod.algoliasearch || mod.default;
}

const appId = '9Y3RHNIFAD';
const searchOnlyApiKey = '602c4a47f7f3b3bfd06064bbf6d86ccc';
const indexName =
  'netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all';

const searchClient = getAlgoliaSearch()(appId, searchOnlyApiKey);

function Hit({ hit }) {
  return (
    <div className='max-w-5xl mx-auto bg-gray-50/90 p-4 rounded-lg'>
      <h2 className='font-extrabold'>
        <Link href={hit.pathname}>{hit.title}</Link>
      </h2>
      <p className='text-sm text-zinc-700 line-clamp-3'>
        <Snippet attribute='content' hit={hit} />
      </p>
    </div>
  );
}

// Exported so the page can use it in getServerState
export function SearchContent() {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <div className='sticky top-0 z-10 bg-white/70 backdrop-blur'>
        <SearchBox
          placeholder='Search Royal Ridges…'
          classNames={{
            root: 'p-3 shadow-sm',
            form: 'mt-6 px-8',
            input:
              'block w-full pl-3 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 rounded-md focus:ring-1',
          }}
        />
      </div>
      <div className='px-4 py-6 space-y-4'>
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
}

export default function SearchPage({ serverState = {} }) {
  // default {} avoids runtime error if serverState isn’t passed for some reason
  return (
    <InstantSearchSSRProvider {...serverState}>
      <SearchContent />
    </InstantSearchSSRProvider>
  );
}

// Re-export getServerState helper for the page
export { getServerState, renderToString };
