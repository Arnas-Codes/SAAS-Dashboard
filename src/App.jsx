import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
const App = () => {
  return (
    <div className="h-1000">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
