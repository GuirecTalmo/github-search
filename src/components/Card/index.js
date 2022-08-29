import "./styles.scss";
import React, { useContext } from "react";
import { DarkModeContest } from "../../context";
import location from "./icon-location.svg";
import twitter from "./icon-twitter.svg";
import personnal from "./icon-website.svg";
import organisation from "./icon-company.svg";

function Card({ ListOfDatas }) {
  const { darkMode } = useContext(DarkModeContest);
  const date = new Date(ListOfDatas.created_at);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={darkMode ? `card theme--dark` : `card theme--light`}>
      <div>
        <div className="profile-header">
          <div className="container-avatar">
            <img id="avatar" src={ListOfDatas.avatar_url} alt="avatar user" />
          </div>
          <div className="profile-info-wrapper">
            <div className="profile-name">
              <h2 id="name">{ListOfDatas.name}</h2>
              <p id="user" className="username">
                @{ListOfDatas.login}
              </p>
            </div>
            <p id="date">Joined {formattedDate}</p>
          </div>
        </div>
        <div className="first-container">
          <p id="bio" className="biographie">
            {ListOfDatas.bio === null ? "Bio Not Available" : ListOfDatas.bio}
          </p>
          <div
            className={
              darkMode
                ? `second-container table--dark`
                : `second-container table--light`
            }
          >
            <div className="little-column">
              <p>Repos</p>
              <p className="number">{ListOfDatas.public_repos}</p>
            </div>
            <div className="little-column">
              <p>Followers</p>
              <p className="number">{ListOfDatas.followers}</p>
            </div>
            <div className="little-column">
              <p>Following</p>
              <p className="number">{ListOfDatas.following}</p>
            </div>
          </div>
          <div className="third-container">
            <div className="little-xs-column marge">
              <img
                className={
                  darkMode ? `icons-card svg--dark` : `icons-card svg--light`
                }
                src={location}
                alt="location"
              />
              <p>
                {ListOfDatas.location === null
                  ? "Not Available"
                  : ListOfDatas.location}
              </p>
            </div>
            <div className="little-xs-column">
              <img
                className={
                  darkMode ? `icons-card svg--dark` : `icons-card svg--light`
                }
                src={twitter}
                alt="twitter"
              />
              <p>
                {ListOfDatas.twitter_username === null
                  ? "Not Available"
                  : `@${ListOfDatas.twitter_username}`}
              </p>
            </div>
            <div className="little-xs-column marge">
              <img
                className={
                  darkMode ? `icons-card svg--dark` : `icons-card svg--light`
                }
                src={personnal}
                alt="personnal"
              />
              <p>
                {ListOfDatas.blog === "" ? "Not Available" : ListOfDatas.blog}
              </p>
            </div>
            <div className="little-xs-column">
              <img
                className={
                  darkMode ? `icons-card svg--dark` : `icons-card svg--light`
                }
                src={organisation}
                alt="orga"
              />
              <p>
                {ListOfDatas.company === null
                  ? "Not Available"
                  : ListOfDatas.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
