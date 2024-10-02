
  'use client';
  import { useState } from 'react';
  import axios from 'axios';
  import BlogForm from '../components/BlogForm';


  export default function Admin() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('/api/posts', { title, slug, content });
        if (res.data.success) {
          setMessage('Post created successfully!');
          setTitle('');
          setSlug('');
          setContent('');
        }
      } catch (error) {
        setMessage('Error creating post.');
      }
    };

    return (
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
        {message && <p className="mb-4">{message}</p>}
        <BlogForm
          title={title}
          setTitle={setTitle}
          slug={slug}
          setSlug={setSlug}
          content={content}
          setContent={setContent}
          handleSubmit={handleSubmit}
        />
      </main>
    );
  }


  
