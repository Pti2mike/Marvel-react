import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome on Marvel Universe!</h1>
      Please select an option to go to:
      <ul>
        <li>
          <Link className="home-link" to="/characters">
            Personnages
          </Link>
        </li>
        <li>
          <Link className="home-link" to="/comics">
            Comics
          </Link>
        </li>
        <li>
          <Link className="home-link" to="/favoris">
            Favoris
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
