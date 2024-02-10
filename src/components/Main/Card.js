import "./Card.css";
import timeAgo from "../../utils/timeAgo";
import formatDate from "../../utils/formatDate";

function Card({ createdAt = "", url = "", title = "", description = "", imageSource = "" }) {
  const createdTimeAgo = timeAgo(createdAt);
  const createdDate = formatDate(createdAt);

  const backgroundImage = {
    background: `url(${imageSource})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card" onClick={handleClick} role="button" tabIndex="0">
      <div className="card-image width-full" style={backgroundImage} />
      <div className="card-text-box">
        <p className="time-ago text-color-text">{createdTimeAgo}</p>
        <p className="card-name multiline-ellipsis">{description}</p>
        <p className="create-date">{createdDate}</p>
      </div>
    </div>
  );
}

export default Card;
