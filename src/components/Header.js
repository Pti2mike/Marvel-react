import React from "react";
import { Link, useHistory } from "react-router-dom";
import Marvel from "../assets/images/Marvel_logo_red.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const history = useHistory();

  return (
    <header className="header">
      <div
        className="header-logo"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={Marvel} alt="marvel-logo" />
      </div>

      <div className="header-search">
        <i className="search-icon" onSubmit={() => {}}>
          <FontAwesomeIcon icon="search" />
        </i>
        <input
          className="search-term"
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Recherche des personnages"
        />
      </div>
      <div className="header-button">
        <div className="select-button" onClick={() => {}}>
          <Link className="characters-button" to="/characters">
            Personnages
          </Link>
          <Link className="comics-button" to="/comics">
            Comics
          </Link>
          <Link className="favoris-button" to="/favoris">
            Favoris
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
