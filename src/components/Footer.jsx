//Project files
import LinkedIn from "../assets/icons/linkedin.png";
import GitHub from "../assets/icons/github.png";

export default function Footer() {
  /**
   * Same as in Contact, look how "uggly" the <a> tag becomes
   * when prettier puts it on 3 lines when it auto format it.
   * That's a sign that you need to improve it.
   *
   * This will not reduce points, because is not as nested or
   * long as Contact but is something to improve.
   */
  return (
    <footer className="footer">
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
