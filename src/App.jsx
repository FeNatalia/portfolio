// NPM Packages
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import "./styles/styles.css";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Projects setModal={setModal} />
      <Technologies />
      <Contact />
      <Modal state={[modal, setModal]} />
    </div>
  );
}
