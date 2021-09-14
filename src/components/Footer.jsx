//Project files
import LinkedIn from "../assets/icons/linkedin.png";
import GitHub from "../assets/icons/github.png";

export default function Footer() {
  return (
    <footer id="footer">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/natfedorova/"
          >
            {" "}
            <img src={LinkedIn} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/FeNatalia"
          >
            {" "}
            <img src={GitHub} alt="github icon" />
          </a>
        </li>
      </ul>
      <p>© 2021 • Natalia Fedorova</p>
    </footer>
  );
}
