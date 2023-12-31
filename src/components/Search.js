import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  InstantSearchSSRProvider,
} from 'react-instantsearch';

const searchClient = algoliasearch(
  'GOTTZE4ARR',
  '17752304b5c1c303ff40f001297943d3'
);

export default function SearchPage({ serverState }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={searchClient}
        indexName='netlify_3f1d04a0-b847-4a3a-aba8-722f05e29701_main_all'
      >
        {/* Widgets */}
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}
