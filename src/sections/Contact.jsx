//Project files
import Footer from "../components/Footer";
import Email from "../assets/icons/email.png";
import Mobile from "../assets/icons/mobile.png";
import Location from "../assets/icons/location.png";

/**
 * Note:
 * Readability (nesting) and Reusability (abstraction) -1 and -1
 * Even if does not pass the 50 lines of code (function length)
 * this component is hard to read becuase everything is a div inside a div.
 * To solve we could make the <li> separate components in order to make the <li><a><img> tags easy to reason about
 */
export default function Contact() {
  return (
    <div className="content-section" id="contact">
      <div className="contact-section">
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
