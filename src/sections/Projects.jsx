// Project files
import JSONProjects from "../data/projects.json";
import JSONKthProjects from "../data/projects-kth.json";
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
            These are the projects I developed during Software Development Academy at KTH - Royal Instutite of Technology. One individual project and 2 fullstack group projects.
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
            I worked on following projects during the Frontend Development course at Novare Potential. All of these are my invidiual projects.
          </p>
        </div>
        <div className="grid-left" id="projects-section">
          {ProjectsList}
        </div>
      </div>
    </div>
  );
}
