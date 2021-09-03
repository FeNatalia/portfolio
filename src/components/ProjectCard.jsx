import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard({
  title,
  preview,
  description,
  screenshot,
  technologies,
  isFinished,
  website,
  github,
}) {
  const previewObject = require(`../assets/pictures/${preview}`);
  const previewURL = previewObject.default;
  const screenshotObject = require(`../assets/pictures/${screenshot}`);
  const screenshotURL = screenshotObject.default;

  const ProjectTechnologiesList = technologies.map((item) => (
    <li className="pills">{item}</li>
  ));

  const [isOpen, setIsOpen] = useState(false);
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
        <img src={previewURL} alt="" />
        <h3>{title}</h3>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div id="modal-popup">
          <div>
            <img src={screenshotURL} alt="" />
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
