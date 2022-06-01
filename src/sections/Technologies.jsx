// Project files
import TechnologyItem from "../components/TechnologyItem";
import JSONTechnologiesFE from "../data/technologies.json";
import JSONTechnologiesBE from "../data/tech-be.json";
import JSONTechnologiesOther from "../data/tech-other.json";

export default function Technologies() {
  // Components
  const TechFEList = JSONTechnologiesFE.map((item) => (
    <TechnologyItem key={item.id} title={item.title} logo={item.logo} />
  ));
  const TechBEList = JSONTechnologiesBE.map((item) => (
    <TechnologyItem key={item.id} title={item.title} logo={item.logo} />
  ));
  const TechOtherList = JSONTechnologiesOther.map((item) => (
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
          {TechFEList}
        </div>
      </div>
      <div className="content-grid">
        <div className="grid-left">
          <h3>Back End</h3>
        </div>
        <div className="grid-right" id="grid-technologies">
          {TechBEList}
        </div>
      </div>
      <div className="content-grid">
        <div className="grid-left">
        <h3>Other technologies</h3>
        </div>
        <div className="grid-right" id="grid-technologies">
          {TechOtherList}
        </div>
      </div>
    </div>
  );
}
