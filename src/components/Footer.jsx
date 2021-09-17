// Project files
import FooterItem from "../components/FooterItem";
import JSONContact from "../data/contact.json";

export default function Footer() {
  // List of footer information
  const FooterItems = JSONContact.filter(
    (item) => item.category === "footer"
  ).map((item) => <FooterItem key={item.id} contactInfo={item} />);

  return (
    <footer id="footer">
      <ul>{FooterItems}</ul>
      <p>© 2021 • Natalia Fedorova</p>
    </footer>
  );
}
