
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Accessible SEO Blog</title>
        <meta name="description" content="About the Accessible SEO Blog." />
      </Head>
      <main className="flex flex-col justify-center items-center p-4 mt-10 space-y-5">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className='text-xl font-medium'>
          This blog is built with accessibility and SEO in mind using Next.js and Tailwind CSS.
        </p>
      </main>
    </>
  );
}
