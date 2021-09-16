// Project files
import JSONProjects from "../data/projects.json";
import ProjectItem from "../components/ProjectItem";
import ProjectModal from "../components/ProjectModal";

export default function Projects( { setModal }) {
  // Components
  const ProjectsList = JSONProjects.map((item) => (
    <ProjectItem key={item.id} item={item} onClick={()=> onProject(item)}/>
  ));

  function onProject(item) {
    setModal(<ProjectModal item={item}/>);
  }

  return (
    <div className="content-section" id="projects">
      <h2>Projects</h2>
      <div className="content-grid">
        <div className="grid-left">
          <p>
            Here are the projects I will be making during the Frontend course at
            Novare Potential.
          </p>
        </div>
        <div className="grid-left" id="projects-section">{ProjectsList}</div>
      </div>
    </div>
  );
}
