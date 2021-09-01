import JSONProjects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects(){

    const ProjectsList = JSONProjects.map((item) => (
        <ProjectCard key={item.id} title={item.title} preview={item.preview} description={item.description}/>
    ))

    return(
        <div className="content-section" id="projects">
            <div>
                <h2>Projects</h2>
                <p>Here are the projects I will be making during the Frontend course at Novare Potential.</p>
            </div>
            <div>
                <p>{ProjectsList}</p>
            </div>
        </div>
    )
}