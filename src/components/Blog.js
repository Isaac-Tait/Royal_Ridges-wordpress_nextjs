import Link from 'next/link';
import Image from 'next/image';

const Blog = ({ allPosts }) => {
  return (
    <div>
      <section>
        {allPosts.edges.map(({ node }) => (
          <div key={node.id} className='my-4'>
            <Link
              href={`https://updatesroyalridges.org/${node.slug}`}
              target="_blank"
            >
              <p className='text-3xl font-cursive text-black'>
                {node.title}
              </p>
              <Image
                src={node.featuredImage.node.mediaItemUrl}
                alt='blog photo'
                width={400}
                height={400}
                className='rounded-xl'
              />
            </Link>
          </div>
        ))}
      </section>
      <Link
        href='https://updatesroyalridges.org'
        className='text-gray-800 bg-yellow-400 opacity-80 hover:bg-green-200 hover:text-white p-1 rounded-md flex mx-auto justify-center'
      >
        Visit our updates page for more information
      </Link>
    </div>
  );
};

export default Blog;

/* export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);

  return {
    props: {
      allPosts,
      preview,
    },
    revalidate: 10,
  };
} */
