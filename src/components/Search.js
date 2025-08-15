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

function resolveAlgoliaFactory() {
  // Pick the right module for the environment
  const mod =
    typeof window === 'undefined' ? AlgoliaNode : AlgoliaBrowser;

  // Try common shapes in order:
  //  - v5 ESM:        mod.algoliasearch
  //  - v4 CJS:        mod.default   (function)
  //  - quirky bundle: mod.default.algoliasearch
  const fn =
    (mod &&
      typeof mod.algoliasearch === 'function' &&
      mod.algoliasearch) ||
    (mod && typeof mod.default === 'function' && mod.default) ||
    (mod &&
      mod.default &&
      typeof mod.default.algoliasearch === 'function' &&
      mod.default.algoliasearch);

  if (!fn) {
    // Temporary debug to see what's actually exported
    // (remove after it works)
    // eslint-disable-next-line no-console
    console.error(
      '[Algolia] export keys:',
      Object.keys(mod || {}),
      'default keys:',
      Object.keys((mod && mod.default) || {})
    );
    throw new Error(
      '[Algolia] Could not resolve algoliasearch export. ' +
        'Ensure there are NO other algoliasearch imports in the repo and that algoliasearch/react-instantsearch versions match.'
    );
  }
  return fn;
}

const appId = '9Y3RHNIFAD';
const searchOnlyApiKey = '602c4a47f7f3b3bfd06064bbf6d86ccc';
const indexName =
  'netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all';

const createSearchClient = resolveAlgoliaFactory();
const searchClient = createSearchClient(appId, searchOnlyApiKey);

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
