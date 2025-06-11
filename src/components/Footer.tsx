// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} YourDevSite. All rights reserved.</p>
        {/* <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white transition duration-300 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-white transition duration-300 text-sm">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer