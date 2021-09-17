// Project files
import TechnologyItem from "../components/TechnologyItem";
import JSONTechnologies from "../data/technologies.json";

export default function Technologies() {
  // Components
  const TechnologiesList = JSONTechnologies.map((item) => (
    <TechnologyItem key={item.id} title={item.title} logo={item.logo} />
  ));

  return (
    <div className="content-section" id="tech">
      <h2>Technologies</h2>
      <div className="content-grid">
        <div className="grid-left">
          <p>
            Here are the techologies that I already know and also learning at
            the moment.
          </p>
        </div>
        <div className="grid-right" id="grid-technologies">
          {TechnologiesList}
        </div>
      </div>
    </div>
  );
}
