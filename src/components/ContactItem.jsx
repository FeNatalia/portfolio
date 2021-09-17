export default function ContactItem({ contactInfo }) {
  // Constants
  const { href, icon, iconalt, text } = contactInfo;
  const iconObject = require(`../assets/icons/${icon}`);
  const iconURL = iconObject.default;
  return (
    <div>
      <li>
        <a href={href}>
          <img src={iconURL} alt={iconalt} />
          {text}
        </a>
      </li>
    </div>
  );
}
