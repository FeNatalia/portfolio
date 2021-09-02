import JSONProjects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects(){

    const ProjectsList = JSONProjects.map((item) => (
        <ProjectCard key={item.id} title={item.title} preview={item.preview} description={item.description} screenshot={item.screenshot} technologies={item.technologies} isFinished={item.isFinished} github={item.github} website={item.website}/>
    ))

    return(
        <div className="content-section" id="projects">
            <h2>Projects</h2>
            <div className="content-grid">
                <div>
                    <p>Here are the projects I will be making during the Frontend course at Novare Potential.</p>
                </div>
                <div className="projects-section">
                    {ProjectsList}
                </div>
            </div>
        </div>
    )
}