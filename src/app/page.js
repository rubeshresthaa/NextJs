

import Head from 'next/head';

import dbConnect from '../lib/dbConnect';
import Post from '../models/Post';
import BlogList from './components/BlogList';

export default async function Home() {
  await dbConnect();
  const posts = await Post.find({}).sort({ createdAt: -1 }).limit(5).lean();
  
  const sanitizedPosts = posts.map((post) => ({
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return (
    <>
      <Head>
        <title>Accessible SEO Blog</title>
        <meta name="description" content="A blog emphasizing accessibility and SEO." />
      </Head>
      <main className="mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <BlogList posts={sanitizedPosts} />
      </main>
    </>
  );
}
