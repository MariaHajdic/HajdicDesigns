// components/Header.tsx
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          YourDevSite
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-white hover:text-sky-300 transition duration-300">Home</a></li>
          <li><a href="#portfolio" className="text-white hover:text-sky-300 transition duration-300">Portfolio</a></li>
          <li><a href="#services" className="text-white hover:text-sky-300 transition duration-300">Services</a></li>
          <li><a href="#blog" className="text-white hover:text-sky-300 transition duration-300">Blog</a></li>
        </ul>
        <div className="md:hidden">
          <button className="text-white text-2xl">&#9776;</button>
        </div>
      </nav>
    </header>
  )
}

export default Header