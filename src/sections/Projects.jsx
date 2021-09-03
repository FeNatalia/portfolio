//Project files
import JSONProjects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  //Component
  const ProjectsList = JSONProjects.map((item) => (
    <ProjectCard key={item.id} projectInfo={item} />
  ));

  return (
    <div className="content-section" id="projects">
      <h2>Projects</h2>
      <div className="content-grid">
        <div>
          <p>
            Here are the projects I will be making during the Frontend course at
            Novare Potential.
          </p>
        </div>
        <div className="projects-section">{ProjectsList}</div>
      </div>
    </div>
  );
}
