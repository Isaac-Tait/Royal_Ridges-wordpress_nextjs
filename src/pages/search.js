'use client';
import React from 'react';

import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  SearchBox,
  Hits,
} from 'react-instantsearch-dom';

import SearchPreview from '../../(components)/SearchPreview';
import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const searchClient = algoliasearch(
  'S0ISUA0J96',
  '09a65c10b549ba2048366fca0c0cb276'
);

class Search extends React.Component {
  render() {
    return (
      <div className='bg-gradient-to-l from-green-200 to-yellow-200'>
        <Header />
        <div class='max-w-6xl h-screen flex flex-col mx-auto overflow-y-scroll'>
          {/*👇🏼 Search component*/}
          <InstantSearch
            searchClient={searchClient}
            indexName='Pages'
          >
            {/*👇🏼 Search Box */}
            <div class='flex justify-center content-center mt-4'>
              <p className='text-green-200 font-semibold mr-2'>
                Enter your search query:
              </p>
              <SearchBox />
            </div>
            {/*👇🏼 Hits */}
            <div className='my-4'>
              <Hits hitComponent={SearchPreview} />
            </div>
          </InstantSearch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search;
