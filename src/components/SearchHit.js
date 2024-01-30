import Link from 'next/link';

import { Highlight } from 'react-instantsearch';

const SearchHit = ({ hit }) => {
  return (
    <div>
      <Link
        href={`${hit.slug}`}
        className='text-2xl text-green-200 hover:text-indigo-600 bg-indigo-400'
      >
        <Highlight hit={hit} attribute='title' />
      </Link>

      <div class='italic ml-2'>
        <Highlight hit={hit} attribute='excerpt' />
      </div>
    </div>
  );
};

export default SearchHit;
