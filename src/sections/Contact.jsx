// Project files
import Footer from "../components/Footer";
import ContactItem from "../components/ContactItem";
import JSONContact from "../data/contact.json";

export default function Contact() {
  // List of contact information
  const ContactItems = JSONContact.filter(
    (item) => item.category === "contact"
  ).map((item) => <ContactItem key={item.id} contactInfo={item} />);

  return (
    <div id="contact">
      <div className="content-section">
        <h2>Contact me</h2>
        <div className="content-grid">
          <p>
            Here is my contact information if you are interested in hiring me.
          </p>
          <div>
            <ul>{ContactItems}</ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
