
'use client';
const BlogForm = ({
  title,
  setTitle,
  slug,
  setSlug,
  content,
  setContent,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center space-y-5 border-2 rounded-lg p-6 shadow-lg "
    >
      <div className="w-full">
        <label className="block font-semibold mb-1" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="w-full">
        <label className="block font-semibold mb-1" htmlFor="slug">
          Slug
        </label>
        <input
          id="slug"
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="w-full">
        <label className="block font-semibold mb-1" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows="10"
          className="w-full text-black border border-gray-300 rounded-md focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"  
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;

