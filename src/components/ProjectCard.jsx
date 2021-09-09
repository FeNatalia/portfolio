//NPM Package
import { useState } from "react";

//Project files
import Modal from "./Modal";

/**
 * This component is too long -1
 * I know that the projectInfo desctruring is taking to many lines, but...
 *
 * 1. The Modal has a lot of tags that should be a separate component named ProjectModal.
 * Just like the List and ShoppingItem, where List can render any kind of item and ShoppingItem is the specific component
 * Modal can render any kind of modal and ProjectModal is the specific component
 *
 * 2. The Modal should not be inside Card, this means that each Card has a "modal" inside making a lot of duplicate code.
 * The correct place to put the <Modal> is in App and the pass props from App > Projects > ProjectCard (3 levels) to open and close it.
 */
export default function ProjectCard({ projectInfo }) {
  //Local state
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Put your destructuring righr after export default function ProjectCard
   */
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
          <img src={screenshotURL} alt={screenshot} />
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
