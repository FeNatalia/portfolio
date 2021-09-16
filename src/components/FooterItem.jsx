export default function FooterItem( { contactInfo }) {
  // Constants
  const { href, icon, iconalt } = contactInfo;
  const iconObject = require(`../assets/icons/${icon}`);
  const iconURL = iconObject.default;

  return (
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {" "}
        <img src={iconURL} alt={iconalt} />
      </a>
    </li>
  );
}
