import { getAllPosts } from '../lib/api';

/* import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'; */

import Blog from '../components/Blog';
//import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div>
      <p>This is my page</p>
      <Blog allPosts={getAllPosts} />
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
