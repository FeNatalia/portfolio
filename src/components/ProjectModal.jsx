export default function ProjectModal({ item }) {
  // Constants
  const {
    title,
    description,
    screenshot,
    technologies,
    website,
    github,
  } = item;
  const screenshotObject = require(`../assets/pictures/${screenshot}`);
  const screenshotURL = screenshotObject.default;
  // List of Technologies
  const ProjectTechnologiesList = technologies.map((item, index) => (
    <li key={index} className="pills">
      {item}
    </li>
  ));

  return (
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
  );
}
