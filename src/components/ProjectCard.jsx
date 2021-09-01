import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard ({title, preview, description, screenshot, technologies, isFinished}) {
    const previewObject = require(`../assets/pictures/${preview}`);
    const previewURL = previewObject.default;
    const screenshotObject = require(`../assets/pictures/${screenshot}`);
    const screenshotURL = screenshotObject.default;

    const TechnologiesList = technologies.map ((item) => (
        <li className="pills">
            {item}
        </li>
    ))

    const [isOpen, setIsOpen] = useState(false);
    return(
        <article>
            <div onClick={()=> isFinished && setIsOpen(true)} className={isFinished?"normal":"overlayed"}>
            {isFinished===false && <div className="overlay-text"><p>Coming soon</p></div>}
                <img src={previewURL} alt=""/>
                <h3>{title}</h3>
            </div>
            <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                <div id="modal-popup">
                    <img src={screenshotURL} alt=""/>
                    <p>{description}</p>
                    <ul id="technologies-list">
                        {TechnologiesList}
                    </ul>
                    <button>Website</button>
                    <button>Github</button>
                </div>
            </Modal>
        </article>
    )
    
}