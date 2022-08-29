import React, { useContext } from "react";
import { DarkModeContest } from "../../context";
import "./styles.scss";
import sun from "./icon-sun.svg";
import moon from "./icon-moon.svg";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContest);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <nav className={darkMode ? "nav header--dark" : "nav header--light"}>
      <div className="container-logo">
        <h1 className="logo">Github Search</h1>
      </div>
      <div className="switcher_container" onClick={handleClick}>
        <p className="darkmode">{darkMode ? "Light" : "Dark"}</p>
        <img
          className="icons-card"
          src={darkMode ? sun : moon}
          alt={darkMode ? "light mode" : "dark mode"}
        />
      </div>
    </nav>
  );
}

export default Header;
