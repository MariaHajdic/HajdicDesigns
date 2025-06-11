// pages/Services.tsx
const Services = () => {
  return (
    <div className="text-center p-8 w-full">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-6">What We Offer</h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Comprehensive web development services tailored to your unique needs, from concept to deployment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="bg-gray-700 rounded-lg shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <svg className="h-16 w-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9.25 21L12.00 17L14.75 21L14.25 17M10 13V17M14 13V17M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2Z"></path></svg>
          <h3 className="text-xl font-semibold text-white mb-2">Custom Web Development</h3>
          <p className="text-gray-300 text-sm">Building bespoke web applications from scratch, tailored to your exact specifications.</p>
        </div>
        <div className="bg-gray-700 rounded-lg shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <svg className="h-16 w-16 text-pink-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16L2 12l4-4"></path></svg>
          <h3 className="text-xl font-semibold text-white mb-2">Frontend & Backend</h3>
          <p className="text-gray-300 text-sm">Expertise in both client-side and server-side development for robust solutions.</p>
        </div>
        <div className="bg-gray-700 rounded-lg shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <svg className="h-16 w-16 text-yellow-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <h3 className="text-xl font-semibold text-white mb-2">Performance Optimization</h3>
          <p className="text-gray-300 text-sm">Ensuring your website is fast, responsive, and provides an excellent user experience.</p>
        </div>
      </div>
    </div>
  )
}

export default Services