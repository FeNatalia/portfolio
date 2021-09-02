import TechnologyCard from "../components/TechnologyCard";
import JSONTechnologies from "../data/technologies.json";

export default function Technologies(){
    const TechnologiesList = JSONTechnologies.map((item) => (
        <TechnologyCard key={item.id} title={item.title} logo={item.logo}/>
    ))
    return(
        <div className="content-section" id="tech">
            <h2>Technologies</h2>
            <div className="content-grid">
                <div>
                    <p>Here are the techologies that I already know and also learning at the moment.</p>
                </div>
                <div className="grid-technologies">
                    {TechnologiesList}
                </div>
            </div>
        </div>
    )
}