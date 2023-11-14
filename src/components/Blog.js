import { getAllPosts } from '@/lib/api';

const Wordpress = ({ allPosts }) => {
  const edges = allPosts?.edges || [];
  <div>
    <section>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <p className='text-3xl font-cursive text-black'>
            {node.title}
          </p>
        </div>
      ))}
    </section>
  </div>;
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
