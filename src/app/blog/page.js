

import dbConnect from '../../lib/dbConnect';
import Post from '../../models/Post';
import Head from 'next/head';
import BlogList from '../components/BlogList';


export default async function BlogPage() {
  // Connect to the database
  await dbConnect();

  // Fetch all blog posts, sorted by creation date (descending)
  const posts = await Post.find({}).sort({ createdAt: -1 }).lean();

  
  const formattedPosts = posts.map(post => ({
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return (
    <>
      <Head>
        <title>Blog - Accessible SEO Blog</title>
        <meta name="description" content="Read our latest blog posts." />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <BlogList posts={formattedPosts} />
      </main>
    </>
  );
}
