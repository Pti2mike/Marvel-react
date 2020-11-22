import React from "react";
import { Link, useHistory } from "react-router-dom";
import Marvel from "../assets/images/Marvel_logo_red.png";

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
      <div className="header-button">
        <div className="select-button">
          <div>
            <Link className="characters-button" to="/characters">
              Personnages
            </Link>
          </div>
          <div>
            <Link className="comics-button" to="/comics">
              Comics
            </Link>
          </div>
          <div>
            <Link className="favoris-button" to="/favoris">
              Favoris
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
