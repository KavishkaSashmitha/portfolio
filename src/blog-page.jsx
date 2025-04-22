import React, { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Clock,
  ChevronRight,
  Search,
  BookOpen,
} from "lucide-react";
import blogPosts from "./content/blog.json";

// Blog List Component
const BlogList = ({ onSelectPost }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");

  // Get unique tags across all blog posts
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  // Filter posts based on search query and active tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center mb-12">
        <BookOpen className="text-blue-300 mr-3" size={28} />
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
          Tech Insights & Thoughts
        </h1>
      </div>

      <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between">
        {/* Search bar */}
        <div className="relative backdrop-blur-md bg-white/5 rounded-xl border border-white/20 flex items-center w-full md:w-72">
          <Search size={18} className="ml-3 text-blue-300" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 bg-transparent border-none text-blue-100 placeholder:text-blue-300/50 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Tags filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag("")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTag === ""
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                : "bg-white/10 text-blue-200 hover:bg-white/20"
            }`}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? "" : tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTag === tag
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                  : "bg-white/10 text-blue-200 hover:bg-white/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="backdrop-blur-md bg-white/5 rounded-xl border border-white/20 p-8 text-center">
          <p className="text-blue-200 text-lg">
            No articles match your search criteria
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveTag("");
            }}
            className="mt-4 text-sm text-blue-300 hover:text-white"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="flex items-center text-blue-300/70">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        tag === activeTag
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          : "bg-indigo-900/40 text-blue-300 border border-indigo-500/30"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-3 group-hover:from-blue-300 group-hover:to-indigo-300 transition-all">
                {post.title}
              </h2>

              <p className="text-blue-50/80 mb-6 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-blue-300/60 text-sm">
                  <Clock size={14} className="mr-1.5" />
                  <span>{post.readTime}</span>
                </div>

                <button
                  onClick={() => onSelectPost(post)}
                  className="group flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-md hover:shadow-blue-500/20 transition-all"
                >
                  <span>Read Article</span>
                  <ChevronRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Blog Post Detail Component
const BlogPostDetail = ({ post, onBack, onSelectPost }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-300 mb-8 hover:text-white transition-colors"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to Articles
      </button>

      <article className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-8 shadow-lg">
        <header className="mb-8 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap justify-between items-center gap-4 text-blue-300/70">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-900/40 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div
          className="prose prose-invert prose-blue max-w-none text-blue-50"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(
                /^## /gm,
                '<h2 class="text-2xl font-bold mt-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">'
              )
              .replace(
                /^### /gm,
                '<h3 class="text-xl font-semibold mt-6 mb-3 text-blue-300">'
              )
              .replace(/- /gm, '<li class="ml-6 text-blue-100">')
              .replace(/\d+\. /gm, '<li class="ml-6 text-blue-100">')
              .replace(
                /`{3}(.*?)`{3}/gs,
                '<pre class="bg-gray-900/50 p-4 rounded-lg overflow-x-auto border border-blue-900/50"><code class="text-blue-300">$1</code></pre>'
              )
              .replace(
                /`(.*?)`/g,
                '<code class="bg-gray-900/50 px-2 py-1 rounded text-sm text-blue-300">$1</code>'
              )
              .replace(/\n\n/g, '<p class="mb-6 text-blue-50/90"></p>'),
          }}
        />

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center">
          <p className="text-blue-300/70 flex items-center">
            <Clock size={16} className="mr-1.5" />
            <span>{post.readTime}</span>
          </p>
          <p className="text-blue-300/70">By Kavishka S</p>
        </div>
      </article>

      {/* Related posts section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">
          Related Articles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts
            .filter(
              (relatedPost) =>
                relatedPost.id !== post.id &&
                relatedPost.tags.some((tag) => post.tags.includes(tag))
            )
            .slice(0, 2)
            .map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="backdrop-blur-md bg-white/5 rounded-lg border border-white/10 p-4 hover:border-blue-500/30 transition-all cursor-pointer"
                onClick={() => onSelectPost(relatedPost)}
              >
                <h4 className="font-bold text-blue-200 mb-2">
                  {relatedPost.title}
                </h4>
                <div className="flex justify-between items-center text-xs text-blue-300/60">
                  <span>{relatedPost.date}</span>
                  <span>{relatedPost.readTime}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="text-white">
      {selectedPost ? (
        <BlogPostDetail
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
          onSelectPost={setSelectedPost}
        />
      ) : (
        <BlogList onSelectPost={setSelectedPost} />
      )}
    </div>
  );
};

export default BlogPage;
