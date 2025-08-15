// src/components/Search.js
import Link from 'next/link';
import { renderToString } from 'react-dom/server';

import * as AlgoliaBrowser from 'algoliasearch/lite';
import * as AlgoliaNode from 'algoliasearch';

const algoliasearch =
  typeof window === 'undefined'
    ? AlgoliaNode.algoliasearch || AlgoliaNode.default
    : AlgoliaBrowser.algoliasearch || AlgoliaBrowser.default;

import {
  InstantSearch,
  InstantSearchSSRProvider,
  getServerState,
  Hits,
  SearchBox,
  Snippet,
} from 'react-instantsearch';

const appId = '9Y3RHNIFAD';
const searchOnlyApiKey = '602c4a47f7f3b3bfd06064bbf6d86ccc';
const indexName =
  'netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all';

const searchClient = algoliasearch(appId, searchOnlyApiKey);

function Hit({ hit }) {
  return (
    <div className='max-w-5xl mx-auto bg-gray-50 opacity-90'>
      <h1>
        <Snippet attribute='content' hit={hit} />
      </h1>
      <Link href={hit.pathname} className='font-extrabold'>
        {hit.title}
      </Link>
      <p className='p-4 text-ellipsis overflow-hidden'>
        {hit.content}
      </p>
    </div>
  );
}

// Export the *content* separately so the page can call getServerState
export function SearchContent() {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <div className='sticky top-0 z-10'>
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
      <div className='min-h-[50vh]'>
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
}

export default function SearchPage({ serverState }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <SearchContent />
    </InstantSearchSSRProvider>
  );
}
