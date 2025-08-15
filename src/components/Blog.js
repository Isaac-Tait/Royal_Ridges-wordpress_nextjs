import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ allPosts }) {
  return (
    <div className='mx-auto w-full max-w-screen-lg px-4 py-8'>
      <ul className='space-y-8'>
        {allPosts.edges.map(({ node }) => (
          <li key={node.id}>
            <Link
              href={`https://updatesroyalridges.org/${node.slug}`}
              target='_blank'
              className='group block'
            >
              <h3 className='text-2xl md:text-3xl font-cursive text-black md:text-center'>
                {node.title}
              </h3>

              <div className='mt-3 mx-auto w-full md:w-[400px]'>
                <Image
                  src={node.featuredImage.node.mediaItemUrl}
                  alt='blog photo'
                  width={800}
                  height={600}
                  className='w-full h-auto rounded-xl transition-transform group-hover:scale-[1.02]'
                  sizes='(min-width:768px) 400px, 100vw'
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-6 flex justify-center'>
        <Link
          href='https://updatesroyalridges.org'
          target='_blank'
          className='rounded-md px-3 py-2 text-gray-800 bg-yellow-400/80 hover:bg-emerald-600 hover:text-white transition-colors'
        >
          Visit our updates page for more information
        </Link>
      </div>
    </div>
  );
}
