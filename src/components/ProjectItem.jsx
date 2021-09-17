export default function ProjectItem({ item, onClick }) {
  // Constants
  const { title, preview, isFinished } = item;
  const previewObject = require(`../assets/pictures/${preview}`);
  const previewURL = previewObject.default;

  return (
    <article>
      <div
        onClick={isFinished ? onClick : undefined}
        className={isFinished ? "normal" : "overlayed"}
      >
        {isFinished === false && (
          <div className="overlay-text">
            <p>Coming soon</p>
          </div>
        )}
        <img src={previewURL} alt={preview} />
        <h3>{title}</h3>
      </div>
    </article>
  );
}
