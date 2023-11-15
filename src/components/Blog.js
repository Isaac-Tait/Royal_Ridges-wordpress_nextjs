import Link from 'next/link';
import Image from 'next/image';

const Blog = ({ allPosts }) => {
  return (
    <div>
      <section className=''>
        {allPosts.edges.map(({ node }) => (
          <div key={node.id} className='my-8'>
            <Link
              href={`https://updatesroyalridges.org/${node.slug}`}
            >
              <p className='text-3xl font-cursive text-black'>
                {node.title}
              </p>
              <Image
                src={node.featuredImage.node.mediaItemUrl}
                alt='blog photo'
                width={400}
                height={400}
              />
            </Link>
          </div>
        ))}
      </section>
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
