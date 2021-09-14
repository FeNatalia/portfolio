//NPM Package
import { useState } from "react";
//Project files
import Modal from "./Modal";

export default function ProjectCard({ projectInfo }) {
  //Local state
  const [isOpen, setIsOpen] = useState(false);
  //Constants
  const {
    title,
    preview,
    description,
    screenshot,
    technologies,
    isFinished,
    website,
    github,
  } = projectInfo;
  const previewObject = require(`../assets/pictures/${preview}`);
  const previewURL = previewObject.default;
  const screenshotObject = require(`../assets/pictures/${screenshot}`);
  const screenshotURL = screenshotObject.default;
  //List of Technologies
  const ProjectTechnologiesList = technologies.map((item) => (
    <li className="pills">{item}</li>
  ));

  return (
    <article>
      <div
        onClick={() => isFinished && setIsOpen(true)}
        className={isFinished ? "normal" : "overlayed"}
      >
        {isFinished === false && (
          <div className="overlay-text">
            <p>Coming soon</p>
          </div>
        )}
        <img src={previewURL} alt={preview} />
        <h3>{title}</h3>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div id="modal-popup">
          <div id="modal-img">
          <img src={screenshotURL} alt={screenshot} />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul id="technologies-list">{ProjectTechnologiesList}</ul>
            <div className="buttons">
              <button className="purple-button">
                <a target="_blank" rel="noopener noreferrer" href={website}>
                  Visit website/app
                </a>
              </button>
              <button className="white-button">
                <a target="_blank" rel="noopener noreferrer" href={github}>
                  Git repository
                </a>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </article>
  );
}
