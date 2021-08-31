import Nav from "./components/Nav";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  );
}
