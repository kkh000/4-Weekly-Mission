import Profile from "./profile";
import Folder from "./folder";
import logo from "../assets/logo.png";
import "../style/HeaderNavigation.css";
function HeaderNavigation() {
  return (
    <div className="Header-Container">
      <div className="Header">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <Profile />
      </div>
      <div className="folder-container">
        <Folder />
      </div>
    </div>
  );
}

export default HeaderNavigation;
