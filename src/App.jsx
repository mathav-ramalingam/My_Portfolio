import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Certifications } from "./Components/Certifications.jsx";

import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Project from "./Components/Project.jsx";

// Loading Screen with GIF
const LoadingScreen = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      zIndex: 9999,
      overflow: "hidden",
    }}
  >
    {/* <img
      src="assets/5.mp4" // Make sure this is in your /public folder
      alt="Loading..."
      style={{ width: "300px", height: "300px", objectFit: "cover" }}
    /> */}
    <DotLottieReact
      src="assets/load.lottie"
      alt="Loading..."
      style={{ width: "300px", height: "300px", objectFit: "cover" }}
      loop
      autoplay
    />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect (adjust time as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this time to match your animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/certification" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
