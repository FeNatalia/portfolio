import Footer from "../components/Footer";
import Email from "../assets/icons/email.png";
import Mobile from "../assets/icons/mobile.png";
import Location from "../assets/icons/location.png";

export default function Contact(){
    return(
        <div className="content-section" id="contact">
            <div className="contact-section">
                <div>
                    <h2>Contact me</h2>
                    <p>Here is my contact information if you are interested in hiring me.</p>
                </div>
                <div>
                    <ul>
                        <li><a href="mailto:nataliafedorova1989@gmail.com"><img src={Email} alt=""/>nataliafedorova1989@gmail.com</a></li>
                        <li><a href="tel:0763497580"><img src={Mobile} alt=""/> +46 76 349 7580</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Stockholm"><img src={Location} alt=""/> Stockholm, Sweden</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}