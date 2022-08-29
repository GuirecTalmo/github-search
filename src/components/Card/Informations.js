import "./styles.scss";
import location from "./icon-location.svg";
import twitter from "./icon-twitter.svg";
import personnal from "./icon-website.svg";
import organisation from "./icon-company.svg";

function Informations() {
  return (
    <div>
      <div className="profile-header">
        <div className="container-avatar">
          <img
            id="avatar"
            src="https://avatars.githubusercontent.com/u/7113573?v=4"
            alt=""
          />
        </div>
        <div className="profile-info-wrapper">
          <div className="profile-name">
            <h2 id="name">Gtalmo</h2>
            <p id="user" className="username">
              @GuirecTalmo
            </p>
          </div>
          <p id="date">Joined 31 Mar 2014</p>
        </div>
      </div>
      <div className="first-container">
        <p id="bio" className="bio">
          This profile has no bio.
        </p>
        <div className="second-container">
          <div className="little-column">
            <p>Repos</p>
            <p className="number">8</p>
          </div>
          <div className="little-column">
            <p>Followers</p>
            <p className="number">254</p>
          </div>
          <div className="little-column">
            <p>Following</p>
            <p className="number">10</p>
          </div>
        </div>
        <div className="third-container">
          <div className="little-xs-column">
            <img className="icons-card" src={location} alt="location" />
            <p>Location</p>
          </div>
          <div className="little-xs-column">
            <img className="icons-card" src={twitter} alt="twitter" />
            <p>Twitter account</p>
          </div>
          <div className="little-xs-column">
            <img className="icons-card" src={personnal} alt="personnal" />
            <p>Personnal website</p>
          </div>
          <div className="little-xs-column">
            <img className="icons-card" src={organisation} alt="orga" />
            <p>Organisation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informations;
