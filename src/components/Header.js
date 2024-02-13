import "../styles/Header.css";

function Header({ profileImage, ownerName, folderName }) {
  return (
    <div className="Header">
      <img
        className="Header-profile"
        src={profileImage}
        alt="폴더 소유자 프로필 이미지"
      />
      <span className="Header-owner">{ownerName}</span>
      <h2 className="Header-folder">{folderName}</h2>
    </div>
  );
}

export default Header;
