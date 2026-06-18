import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Shop from "./pages/Shop Page/Shop";
import Exp from "./pages/AboutUs Page/Exp";
import Testimonials from "./pages/AboutUs Page/Testimonials";
import Footer from "./pages/Footer/Footer";

import rectangleImg from "./assets/images/BgImages/Rectangle.png";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        className="min-h-screen bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${rectangleImg})` }}
      >
        <Navbar />
        <Hero />
      </div>

      <main>
        <About />
        <Shop />
        <Exp />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;