import React, { useState } from "react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import blogPosts from "./content/blog.json";
// Blog Posts JSON

// Blog List Component
const BlogList = ({ onSelectPost }) => (
  <div className="container mx-auto px-4 py-12 bg-yellow-50 min-h-screen">
    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
      Tech Insights & Thoughts
    </h1>
    <div className="max-w-4xl mx-auto space-y-8">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex space-x-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">{post.readTime}</span>
            <button
              onClick={() => onSelectPost(post)}
              className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-400 transition"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Blog Post Detail Component
const BlogPostDetail = ({ post, onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12 bg-yellow-50 min-h-screen">
      <button
        onClick={onBack}
        className="flex items-center text-gray-700 mb-8 hover:text-yellow-600 transition"
      >
        <ArrowLeft className="mr-2" /> Back to Blog List
      </button>

      <article className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="flex justify-between items-center text-gray-600">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2" />
              <div className="flex space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div
          className="prose prose-yellow max-w-none"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/^## /gm, '<h2 class="text-2xl font-bold mt-6 mb-4">')
              .replace(
                /^### /gm,
                '<h3 class="text-xl font-semibold mt-4 mb-3">'
              )
              .replace(/- /gm, '<li class="list-disc ml-6">')
              .replace(/\d+\. /gm, '<li class="list-decimal ml-6">')
              .replace(
                /`{3}(.*?)`{3}/gs,
                '<pre class="bg-gray-100 p-4 rounded-md overflow-x-auto"><code>$1</code></pre>'
              )
              .replace(
                /`(.*?)`/g,
                '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'
              ),
          }}
        />

        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-gray-600">{post.readTime} • By Kavishka S</p>
        </div>
      </article>
    </div>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="font-sans text-gray-900">
      {selectedPost ? (
        <BlogPostDetail
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      ) : (
        <BlogList onSelectPost={setSelectedPost} />
      )}
    </div>
  );
};

export default BlogPage;
