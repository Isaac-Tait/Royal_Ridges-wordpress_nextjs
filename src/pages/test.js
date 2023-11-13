import Header from '../components/Header';
import Footer from '../components/Footer';

import Blog from '../components/Blog';
export default function Home({ getAllPosts }) {
  return (
    <div>
      <Header />
      <div className='h-96'>
        <Blog allPosts={getAllPosts} />
      </div>
      <Footer />
    </div>
  );
}
