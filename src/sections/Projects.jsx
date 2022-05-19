// Project files
import JSONProjects from "../data/projects.json";
import JSONKthProjects from "../data/projects-kth.json";
import JSONSaltProjects from "../data/projects-salt.json";
import ProjectItem from "../components/ProjectItem";
import ProjectModal from "../components/ProjectModal";

export default function Projects({ setModal }) {
  // Components
  const ProjectsList = JSONProjects.map((item) => (
    <ProjectItem key={item.id} item={item} onClick={() => onProject(item)} />
  ));

  const KTHProjectsList = JSONKthProjects.map((item) => (
    <ProjectItem key={item.id} item={item} onClick={() => onProject(item)} />
  ));

  const SaltProjectsList = JSONSaltProjects.map((item) => (
    <ProjectItem key={item.id} item={item} onClick={() => onProject(item)} />
  ));
  // Methods
  function onProject(item) {
    setModal(<ProjectModal item={item} />);
  }

  return (
    <div className="content-section" id="projects">
      <h2>Projects</h2>
      <h3>KTH</h3>
      <div className="content-grid">
        <div className="grid-left">
          <p>
            These are the projects I developed during Software Development Academy at KTH - Royal Instutite of Technology in Stockholm. One individual project and 2 fullstack group projects.
          </p>
        </div>
        <div className="grid-left" id="projects-section">
          {KTHProjectsList}
        </div>
      </div>
      <h3>Novare Potential</h3>
      <div className="content-grid">
        <div className="grid-left">
          <p>
            I worked on following projects during the Frontend Development training at Novare Potential in Stockholm. All of these are my invidiual projects.
          </p>
        </div>
        <div className="grid-left" id="projects-section">
          {ProjectsList}
        </div>
      </div>
      <h3>School of Applied Technology</h3>
      <div className="content-grid">
        <div className="grid-left">
          <p>
            I developed these projects during the Full Stack JavaScript Bootcamp at SALT. Some projects were completed in teams and some - individually.
          </p>
        </div>
        <div className="grid-left" id="projects-section">
          {SaltProjectsList}
        </div>
      </div>
    </div>
  );
}
