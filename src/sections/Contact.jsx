//Project files
import Footer from "../components/Footer";
import Email from "../assets/icons/email.png";
import Mobile from "../assets/icons/mobile.png";
import Location from "../assets/icons/location.png";

export default function Contact() {
  return (
    <div id="contact">
      <div className="content-section">
        <h2>Contact me</h2>
        <div className="content-grid">
          <div>
            <p>
              Here is my contact information if you are interested in hiring me.
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a href="mailto:nataliafedorova1989@gmail.com">
                  <img src={Email} alt="email icon" />
                  nataliafedorova1989@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0763497580">
                  <img src={Mobile} alt="mobile icon" /> +46 76 349 7580
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Stockholm"
                >
                  <img src={Location} alt="location icon" /> Stockholm, Sweden
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
