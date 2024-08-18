import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
   <main className="overflow-x-hidden  bg-black tracking-tighter text-gray-200 antialiased">
<Navbar/>
<HeroSection/>
<About/>
<Skills/>
   </main>
  );
}

export default App;
