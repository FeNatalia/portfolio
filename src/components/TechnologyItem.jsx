export default function TechnologyItem({ title, logo }) {
  //Constants
  const logoObject = require(`../assets/technology-icons/${logo}`);
  const logoURL = logoObject.default;

  return (
    <div className="tech-card">
      <img src={logoURL} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
