import { getAllPosts } from '../lib/api';

import Link from 'next/link';

import Blog from '../components/Blog';
//import Navigation from '../components/Navigation';

export default function Home({ getAllPosts }) {
  console.log(
    '🚀 ~ file: index.js:9 ~ Home ~ getAllPosts:',
    getAllPosts
  );
  return (
    <div>
      <p className='flex justify-center my-8'>
        This is my home page...Below should be two blog post titles in
        large, black, cursive font
      </p>
      <Blog allPosts={getAllPosts} />
      <hr />
      <div className='flex justify-center mt-12'>
        <p>You should also see the blog post titles on</p>
        <Link href='/test' className='underline'>
          &nbsp;this test page too
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
