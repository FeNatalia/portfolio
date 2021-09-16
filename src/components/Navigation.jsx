// Project files
import Logo from "../assets/icons/logo.png";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#hero">
            <img src={Logo} alt="a circle with NF initials" />
          </a>
        </li>
        <li>
          <a href="#tech">Tech</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
