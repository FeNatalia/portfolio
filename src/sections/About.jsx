/**
 * Note:
 * Add an space after the //
 * Bad: //Project files
 * Good: // Project files
 */
// Project files
import Illustration from "../assets/illustrations/illustration.png";

export default function About() {
  return (
    <div className="content-section" id="about">
      <h2>About me</h2>
      <div className="content-grid">
        {/* Give this a className like left or top, to make it more sense */}
        <div>
          <p>
            Hello! I’m Natalia, a Junior Front End Developer and Project Manager
            in IT based in Stockholm. Welcome to my website, here you can find
            projects that I have developed.
          </p>
          <p>
            I specialize in React development with a user-centered design. I
            have previuosly completed IT Project Management training with the
            focus on Scrum. If your company uses Agile methodologies - we are on
            the same page. Scroll down to see some of my work!
          </p>
        </div>
        {/* Give this a className like right or bottom, to make it more sense */}
        <div className="about-image">
          <img src={Illustration} alt="an illustration" />
        </div>
      </div>
    </div>
  );
}
