// == Import
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { DarkModeContest } from "../../context";
import "../Card/styles.scss";

// == Composant
function Message({ message }) {
  const { darkMode } = useContext(DarkModeContest);
  return (
    <div
      className={
        darkMode ? `CardMessage theme--dark` : `CardMessage theme--light`
      }
    >
      <p>{message}</p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  displayMessage: PropTypes.bool.isRequired,
};

// == Export
export default Message;
