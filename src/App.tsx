import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Blog from './pages/Blog'
import GetInTouchButton from './components/GetInTouch'

// function App() {
//   const headerHeight = 80; // Assuming a fixed header height for main content padding

//   return (
//     <>
//       {/*
//         This div wraps the entire application and sets global styles.
//         - `min-h-screen`: Ensures the div is at least the height of the viewport.
//         - `font-inter`: Sets the default font (Tailwind default or configured).
//         - `bg-gray-900 text-white`: Provides a dark background and white text fallback.
//         - `overflow-y-scroll`: This is CRUCIAL for the parallax effect to work, as it allows scrolling.
//         - `scroll-smooth`: Optional, for smooth scrolling to anchor links.
//       */}
//       <div className="min-h-screen font-inter bg-gray-900 text-white overflow-y-scroll scroll-smooth">
//         <Header />
//         {/*
//           `main` content area.
//           - `pt-[80px]`: Adds padding to account for the fixed header, preventing content from being hidden underneath.
//           - `relative z-0`: Ensures the main content can stack correctly relative to other elements (like the floating button).
//         */}
//         <main style={{ paddingTop: `${headerHeight}px` }} className="relative z-0">
//           <GetInTouchButton /> {/* This button is fixed and floats above sections */}

//           {/*
//             Each section now needs a defined height or minimum height so that
//             you can scroll down and see the parallax effect.
//             - `min-h-screen`: Makes each section at least the height of the viewport.
//             - `relative overflow-hidden`: The Home section needs `overflow-hidden`
//                                           to contain its absolutely positioned children
//                                           without them affecting its scroll size.
//           */}
//           <section id="home" className="min-h-screen relative">
//             <Home />
//           </section>
//           <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-800 to-gray-700 min-h-screen flex items-center justify-center">
//             <Portfolio />
//           </section>
//           <section id="services" className="py-20 bg-gray-800 min-h-screen flex items-center justify-center">
//             <Services />
//           </section>
//           <section id="blog" className="py-20 bg-gradient-to-b from-gray-700 to-gray-600 min-h-screen flex items-center justify-center">
//             <Blog />
//           </section>
//         </main>
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default App


// src/App.tsx
function App() {
  const headerHeight = 80;

  return (
    <>
      <div className="min-h-screen font-inter bg-gray-900 text-white overflow-y-scroll scroll-smooth">
        <Header />
        <main style={{ paddingTop: `${headerHeight}px` }} className="relative z-0">
          <GetInTouchButton />

          <section id="home" className="min-h-screen relative">
            <Home />
          </section>
          <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-800 to-gray-700 min-h-screen flex items-center justify-center">
            <Portfolio />
          </section>
          <section id="services" className="py-20 bg-gray-800 min-h-screen flex items-center justify-center">
            <Services />
          </section>
          <section id="blog" className="py-20 bg-gradient-to-b from-gray-700 to-gray-600 min-h-screen flex items-center justify-center">
            <Blog />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
