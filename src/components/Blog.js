import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ allPosts }) {
  return (
    <div className='flex flex-col'>
      <section className='overflow-auto'>
        {allPosts.edges.map(({ node }) => (
          <div key={node.id} className='my-4'>
            <Link
              href={`https://updatesroyalridges.org/${node.slug}`}
              target='_blank'
            >
              <p className='text-3xl font-cursive text-black'>
                {node.title}
              </p>
              <Image
                src={node.featuredImage.node.mediaItemUrl}
                alt='blog photo'
                width={200}
                height={200}
                className='rounded-xl block md:hidden mx-auto'
              />
              <Image
                src={node.featuredImage.node.mediaItemUrl}
                alt='blog photo'
                width={400}
                height={400}
                className='rounded-xl hidden md:block'
              />
            </Link>
          </div>
        ))}
      </section>
      <Link
        href='https://updatesroyalridges.org'
        className='text-gray-800 bg-yellow-400 opacity-80 hover:bg-green-200 hover:text-white p-1 rounded-md flex mx-auto justify-center mt-1'
        target='_blank'
      >
        Visit our updates page for more information
      </Link>
    </div>
  );
}
