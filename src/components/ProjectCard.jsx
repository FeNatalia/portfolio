import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard ({title, preview, description, screenshot}) {
    const previewObject = require(`../assets/pictures/${preview}`);
    const previewURL = previewObject.default;
    const screenshotObject = require(`../assets/pictures/${screenshot}`);
    const screenshotURL = screenshotObject.default;

    const [isOpen, setIsOpen] = useState(false);
    return(
        <section>
            <article>
                <img src={previewURL} alt=""/>
                <h3>{title}</h3>
                <button onClick={()=> setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                    <div id="modal-popup">
                        <img src={screenshotURL} alt=""/>
                        <p>{description}</p>
                    </div>
                </Modal>
            </article>
        </section>
    )
    
}