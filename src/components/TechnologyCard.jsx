export default function TechnologyCard({title, logo}){
    const logoObject = require(`../assets/technology-icons/${logo}`);
    const logoURL = logoObject.default;

    return(
        <div className="tech-card">
            <img src={logoURL} alt=""/>
            <h3>{title}</h3>
        </div>
    )
}