import LinkedIn from "../assets/icons/linkedin.png";
import GitHub from "../assets/icons/github.png";

export default function Footer(){
    return (
        <footer className="footer">
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/natfedorova/"> <img src={LinkedIn} alt=""/></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/FeNatalia"> <img src={GitHub} alt=""/></a></li>
            </ul>
            <p>© 2021 • Natalia Fedorova</p>
        </footer>
    )
}