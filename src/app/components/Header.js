
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-neutral-700 text-white">
      <nav className="mx-auto p-4 flex justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">
            Task Project
          </Link>
        </div>
        <ul className="flex space-x-4 text-xl">
          <li>
            <Link href="/"
               className="hover:underline hover:underline-offset-8 ">Home
            </Link>
          </li>
          <li>
            <Link href="/about"  className="hover:underline hover:underline-offset-8">About
            </Link>
          </li>
          <li>
            <Link href="/blog"  className="hover:underline hover:underline-offset-8">Blog 
            </Link>
          </li>
          <li>
            <Link href="/admin"
              className="hover:underline hover:underline-offset-8">Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
