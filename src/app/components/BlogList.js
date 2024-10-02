
import Link from 'next/link';

const BlogList = ({ posts }) => {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post._id} className="bg-gray-50 p-4 rounded-md shadow">
          <Link href={`/blog/${post.slug}`}  className="text-2xl font-bold text-black hover:underline hover:underline-offset-8">
              {post.title}
          
          </Link>
          <p className="text-black  text-xl mt-2">
            {post.content.substring(0, 150)}...
          </p>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
