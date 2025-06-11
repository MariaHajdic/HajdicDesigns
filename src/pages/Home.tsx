// pages/Home.tsx
const Home = () => {
  const backgroundImage = '/assets/background.webp';

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/*
        This div creates the parallax background.
          - `absolute inset-0`: Positions it to cover the entire parent container.
          - `bg-cover bg-center`: Ensures the image covers the area and is centered.
          - `bg-fixed`: This is the key for the parallax effect. It keeps the background image
                        fixed relative to the viewport, so it appears to scroll slower than
                        the foreground content.
          - `z-0`: Ensures it's behind the content, but still receives click events if needed.
      */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      >
        {/*
            Gradient Overlay: Improves text readability over the background image.
            Adjust opacity and colors as needed.
          */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300">
          Crafting Digital Experiences
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-200">
          Innovative Web Development Solutions for Modern Businesses
        </p>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
          Explore Our Services
        </button>
      </div>
    </div>
  )
}

// const Home = () => {
  
//     return (
//       <div className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
//           style={{ backgroundImage: `url('${backgroundImage}')` }}
//           aria-hidden="true" // Indicate this element is purely decorative for accessibility
//         >
          
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//         </div>
  
//         {/*
//           Landing Text and Call to Action
//           - `relative z-10`: Brings this content above the background.
//           - `p-4 max-w-4xl mx-auto`: Basic padding and centering for responsive text.
//         */}
//         <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300">
//             Crafting Digital Experiences
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-200">
//             Innovative Web Development Solutions for Modern Businesses
//           </p>
//           <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
//             Explore Our Services
//           </button>
//         </div>
//       </div>
//     )
// }

export default Home

