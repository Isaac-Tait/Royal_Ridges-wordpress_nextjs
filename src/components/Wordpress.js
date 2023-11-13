import { getAllPosts } from '../../src/pages/api/api';

const Wordpress = ({ allPosts }) => {
  // Check if allPosts and edges are defined before accessing their properties
  const edges = allPosts ? allPosts.edges : [];

  return (
    <section>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <p className='text-3xl font-cursive text-black'>
            {node.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Wordpress;

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
