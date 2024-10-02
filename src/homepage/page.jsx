// /app/page.js
import Head from "next/head";
import Link from "next/link";

const HomePage = async () => {
  const apiUrl = process.env.API_URL || 'http://localhost:3000'; // Fallback URL
  console.log("API_URL:", apiUrl); // Debugging line
  
  const res = await fetch(`${apiUrl}/api/posts`, {
    cache: 'no-store', // Ensures fresh data each request
  });

  // Check for a successful response
  if (!res.ok) {
    console.error("Failed to fetch posts:", res.statusText);
    return <div>Error fetching posts</div>;
  }

  const posts = await res.json();

  return (
    <div>
      <Head>
        <title>Home | My Blog</title>
        <meta name="description" content="Welcome to my blog where you can read the latest posts." />
        <meta property="og:title" content="Home | My Blog" />
        <meta property="og:description" content="Welcome to my blog where you can read the latest posts." />
        <meta property="og:type" content="website" />
        
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Blog</h1>
        <section>
          <h2 className="text-3xl mb-4">Latest Posts</h2>
          <ul>
            {posts && posts.length > 0 ? (
              posts.map(post => (
                <li key={post._id} className="mb-4">
                  <Link href={`/blogs/${post.slug}`} className="text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                  <p className="text-gray-600">{post.content.slice(0, 150)}...</p>
                </li>
              ))
            ) : (
              <li>No posts available.</li>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
