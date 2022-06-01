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
          <h3>Front End</h3>
        </div>
        <div className="grid-right" id="grid-technologies">
          {TechnologiesList}
        </div>
      </div>
      <div className="content-grid">
        <div className="grid-left">
        <h3>Back End</h3>
        </div>
        <div className="grid-right" id="grid-technologies">
          {TechnologiesList}
        </div>
      </div>
      <div className="content-grid">
        <div className="grid-left">
        <h3>Other technologies</h3>
        </div>
        <div className="grid-right" id="grid-technologies">
          {TechnologiesList}
        </div>
      </div>
    </div>
  );
}
