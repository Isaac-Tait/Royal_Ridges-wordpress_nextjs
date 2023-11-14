import { getAllPosts } from '@/lib/api';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Blog from '../components/Blog';

export default function Home({ allPosts }) {
  console.log({ allPosts });
  return (
    <div>
      <Header />
      <div className='h-96'>
        <Blog allPosts={allPosts} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);
  console.log({ allPosts });
  return {
    props: {
      allPosts,
    },
  };
}
