import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Wedding Planning Tips From Industry Experts',
      excerpt: 'Learn essential tips from seasoned wedding planners to make your big day perfect...',
      author: 'Priya Sharma',
      date: '2025-02-20',
      image: '📋',
      category: 'Planning',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Budget-Friendly Wedding Ideas Without Compromising Style',
      excerpt: 'Create a stunning wedding on a budget. Discover creative ways to save money...',
      author: 'Raj Kumar',
      date: '2025-02-18',
      image: '💰',
      category: 'Budget',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'How to Choose the Perfect Wedding Venue in Your City',
      excerpt: 'A comprehensive guide to selecting the ideal venue that matches your vision...',
      author: 'Ananya Mishra',
      date: '2025-02-15',
      image: '🏛️',
      category: 'Venues',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'AI Wedding Planner: Your Personal Wedding Assistant',
      excerpt: 'Discover how artificial intelligence is changing wedding planning forever...',
      author: 'Priya Sharma',
      date: '2025-02-12',
      image: '🤖',
      category: 'Technology',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Trending Wedding Decoration Ideas for 2025',
      excerpt: 'Explore the latest decoration trends that will make your wedding memorable...',
      author: 'Sarah Khan',
      date: '2025-02-10',
      image: '🎨',
      category: 'Decoration',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Guest Management: Tips for a Smooth Wedding Experience',
      excerpt: 'Master the art of managing guests and creating a seamless experience...',
      author: 'Raj Kumar',
      date: '2025-02-08',
      image: '👥',
      category: 'Management',
      readTime: '6 min read',
    },
  ];

  const categories = [
    { name: 'All', count: 45 },
    { name: 'Planning', count: 12 },
    { name: 'Budget', count: 8 },
    { name: 'Venues', count: 10 },
    { name: 'Decoration', count: 7 },
    { name: 'Photography', count: 5 },
    { name: 'Technology', count: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Header */}
      <div className="glass-effect text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Wedding Planning Blog</h1>
          <p className="text-xl text-white/80">Tips, ideas, and inspiration for your perfect wedding</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 hover:shadow-2xl transition duration-300 cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-96 bg-gradient-to-br from-mehrun/20 to-gold/20 flex items-center justify-center text-9xl">
              📰
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block bg-mehrun text-white px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                Featured
              </span>
              <h2 className="text-4xl font-bold text-mehrun mb-4">
                The Ultimate Wedding Planning Timeline
              </h2>
              <p className="text-gray-700 mb-6">
                Get a complete month-by-month breakdown of what you should focus on to plan your dream wedding 
                without stress. Learn from our experts about the critical milestones...
              </p>
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FiUser /> Sarah Khan
                </span>
                <span className="flex items-center gap-2">
                  <FiCalendar /> Feb 25, 2025
                </span>
                <span>9 min read</span>
              </div>
              <button className="btn-mehrun w-fit flex items-center gap-2">
                Read Article <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
              <h3 className="text-xl font-bold text-mehrun mb-6">📂 Categories</h3>
              <div className="space-y-2">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-mehrun hover:text-white transition duration-300 text-gray-700 flex justify-between items-center"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs bg-mehrun/10 px-2 py-1 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-mehrun mb-3">💌 Newsletter</h4>
                <p className="text-sm text-gray-600 mb-3">Get wedding tips weekly</p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-mehrun text-sm mb-3"
                />
                <button className="w-full btn-mehrun text-sm">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3 space-y-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer group"
              >
                <div className="flex gap-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-mehrun/20 to-gold/20 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                    {post.image}
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="inline-block bg-mehrun/20 text-mehrun px-3 py-1 rounded-full text-xs font-bold mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-mehrun mb-3 group-hover:text-gold transition duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FiUser size={14} /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiCalendar size={14} /> {post.date}
                        </span>
                      </div>
                      <span className="text-gold font-semibold">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-16">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg font-semibold transition duration-300 ${
                page === 1
                  ? 'bg-mehrun text-white'
                  : 'bg-white text-mehrun border border-mehrun hover:bg-mehrun hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
