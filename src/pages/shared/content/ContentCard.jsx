import "../content/ContentCard.css";
import noImage from "../../../assets/shared/no-image.png";
import useTimeAgo from "../../../hooks/useTimeAgo";
import useConvertDate from "./../../../hooks/useConvertDate";

function ContentCard({ link }) {
  return (
    <div className="card" onClick={() => window.open(link.url)}>
      <div className="image-wrapper">
        {link?.imageSource ? (
          <img className="img" src={link?.imageSource} alt={link.title} />
        ) : (
          <img className="img" src={noImage} alt={link?.title} />
        )}
      </div>
      <div className="text-box">
        <p className="time-ago">{useTimeAgo(link?.createdAt)}</p>
        <p className="desc">{link?.description}</p>
        <p className="date">{useConvertDate(link?.createdAt)}</p>
      </div>
    </div>
  );
}

export default ContentCard;
