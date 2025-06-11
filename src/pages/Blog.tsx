// pages/Blog.tsx
const Blog = () => {
  return (
    <div className="text-center p-8 w-full">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6">Latest Insights</h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Stay updated with our thoughts on web trends, technology, and industry best practices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="https://placehold.co/600x300/F59E0B/FFFFFF?text=Blog+Post+1" alt="Blog Post 1" className="w-full h-40 object-cover"/>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">The Future of Web Components</h3>
            <p className="text-gray-300 text-sm mb-4">Exploring how web components are shaping modular and reusable UI development.</p>
            <a href="#" className="text-orange-300 hover:underline text-sm">Read More</a>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="https://placehold.co/600x300/EC4899/FFFFFF?text=Blog+Post+2" alt="Blog Post 2" className="w-full h-40 object-cover"/>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">Mastering React Hooks</h3>
            <p className="text-gray-300 text-sm mb-4">A deep dive into advanced React Hooks for cleaner and more efficient code.</p>
            <a href="#" className="text-orange-300 hover:underline text-sm">Read More</a>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="https://placehold.co/600x300/60A5FA/FFFFFF?text=Blog+Post+3" alt="Blog Post 3" className="w-full h-40 object-cover"/>
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">CSS Grid vs Flexbox</h3>
            <p className="text-gray-300 text-sm mb-4">Understanding when to use CSS Grid and when Flexbox is the better choice.</p>
            <a href="#" className="text-orange-300 hover:underline text-sm">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog