/** 
 * Readability: Name -1
 * This component is not a Card. As menitoned in the Requirements document:
 * 
 * 2.4 Portofolio
 * Contains an even shorter description and cards (nice buttons) that open a modal with 
 * the project information.
 * 
 * The key word being (nice buttons), this is not a button, so is not a card is just an item
"
*/
export default function TechnologyCard({ title, logo }) {
  //Constants
  const logoObject = require(`../assets/technology-icons/${logo}`); // correct, you use this method when you need to load dynamic images (when the image is unknow until you get the data as a prop)
  const logoURL = logoObject.default;

  return (
    <div className="tech-card">
      <img src={logoURL} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
