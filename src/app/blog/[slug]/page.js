

import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/Post';
import Head from 'next/head';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Connect to the database
  await dbConnect();

  // Find the blog post by its slug
  const post = await Post.findOne({ slug }).lean();

  
  if (!post) {
    notFound();
  }

  // Format post for serialization
  const formattedPost = {
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };

  return (
    <>
      <Head>
        <title>{formattedPost.title} - Accessible SEO Blog</title>
        <meta name="description" content={formattedPost.content.substring(0, 150)} />
        {/* Add structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: formattedPost.title,
              articleBody: formattedPost.content,
              datePublished: formattedPost.createdAt,
              dateModified: formattedPost.updatedAt,
              author: {
                "@type": "Person",
                name: "Your Name",
              },
            }),
          }}
        />
      </Head>
      <article className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{formattedPost.title}</h1>
        <div className="prose text-white" dangerouslySetInnerHTML={{ __html: formattedPost.content }} />
      </article>
    </>
  );
}
