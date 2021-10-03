// Project files
import JSONProjects from "../data/projects.json";
import ProjectItem from "../components/ProjectItem";
import ProjectModal from "../components/ProjectModal";

export default function Projects({ setModal }) {
  // Components
  const ProjectsList = JSONProjects.map((item) => (
    <ProjectItem key={item.id} item={item} onClick={() => onProject(item)} />
  ));

  // Methods
  function onProject(item) {
    setModal(<ProjectModal item={item} />);
  }

  return (
    <div className="content-section" id="projects">
      <h2>Projects</h2>
      <div className="content-grid">
        <div className="grid-left">
          <p>
            These are the projects I am working on during the Frontend Development 
            course at Novare Potential. 
          </p>
          <p>
            You can also find projects from my previous course
            (Software Development Academy at KTH - Royal Instutite of Technology) 
            on my GitHub page.
          </p>
        </div>
        <div className="grid-left" id="projects-section">
          {ProjectsList}
        </div>
      </div>
    </div>
  );
}
