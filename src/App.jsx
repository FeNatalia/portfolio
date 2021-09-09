//NPM Packages
import Nav from "./components/Nav";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import "./styles/styles.css";

/**
 * Note:
 * By the way great use of json files.
 * I cannot write the comments inside the JSON file
 * because is impossilbe to add comments to json but
 * nice detail. Some students where using JS objects,
 * but json is the correct approach.
 */
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}
