
const Blog = ({ allPosts }) => {
  return (
    <div>
      <section>
        {allPosts.edges.map(({ node }) => (
          <div key={node.id}>
            <p className='text-3xl font-cursive text-black'>
              {node.title}
            </p>
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
