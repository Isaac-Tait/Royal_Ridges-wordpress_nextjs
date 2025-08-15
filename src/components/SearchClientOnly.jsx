'use client';

import Link from 'next/link';
import * as Algolia from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Snippet,
  Configure,
} from 'react-instantsearch';

// Algolia app creds
const appId = '9Y3RHNIFAD';
const searchOnlyApiKey = '602c4a47f7f3b3bfd06064bbf6d86ccc';
const indexName =
  'netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all';

// v5 (named) or v4 (default) compatible
const createSearchClient =
  (typeof Algolia.algoliasearch === 'function' &&
    Algolia.algoliasearch) ||
  (typeof Algolia.default === 'function' && Algolia.default);

if (!createSearchClient) {
  throw new Error(
    '[Algolia] Could not resolve algoliasearch from algoliasearch/lite'
  );
}

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

export default function SearchClientOnly() {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      {/* Quiet the userToken analytics warning for now */}
      <Configure clickAnalytics={false} />

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
