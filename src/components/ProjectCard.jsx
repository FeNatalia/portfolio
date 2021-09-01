import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard ({title, preview, description}) {
    const imageObject = require(`../assets/pictures/${preview}`);
    const imageURL = imageObject.default;
    const [isOpen, setIsOpen] = useState(false);
    return(
        <section>
            <article>
                <img src={imageURL} alt=""/>
                <h3>{title}</h3>
                <button onClick={()=> setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                    <p>{description}</p>
                </Modal>
            </article>
        </section>
    )
    
}