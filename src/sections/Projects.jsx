//Project files
import JSONProjects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  /**
   * Note 1:
   * Components, plural even if there is only one, because the comment is a "category title".
   * Otherwise you need to change it everytime the project evolves,
   * and you need to add more components.
   *
   * Note 2:
   * The solution done here: Importing data from a JSON and then make a .map() to loop it,
   * is was is needed on Contact.jsx
   */
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
