import Illustration from "../assets/illustrations/illustration.png";

export default function About() {
    return(
        <div id="about">
            <h1>About me</h1>
            <p>Hello! I’m Natalia, a Junior Front End Developer and Project Manager in IT based in Stockholm. Welcome to my website, here you can find projects that I have developed.</p>
            <p>I specialize in React development with a user-centered design. I have previuosly completed IT Project Management training with the focus on Scrum. If your company uses Agile methodologies - we are on the same page.</p>
            <p>Scroll down to see some of my work!</p>
            <img src={Illustration} alt=""/>
        </div>
    )
}