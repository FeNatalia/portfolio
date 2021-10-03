// Project files
import Photo from "../assets/photos/my-photo.png";

export default function About() {
  return (
    <div className="content-section" id="about">
      <h2>About me</h2>
      <div className="content-grid">
        <div className="grid-left">
          <p>
            Hello! I’m Natalia, a Junior Front End Developer and Project Manager
            in IT based in Stockholm. Welcome to my website, here you can find
            projects that I have developed.
          </p>
          <p>
            I specialize in React development with a user-centered design. Additionally, 
            I have previous experience working with Project Management at a Swedish EdTech startup. 
            And I have accomplished training which prepared me to work as a Scrum Master.
          </p>
          <p>
            Scroll down to see some of my work!
          </p>
        </div>
        <div className="grid-right" id="about-image">
          <img src={Photo} alt="a young woman smiling in a suit" />
        </div>
      </div>
    </div>
  );
}
