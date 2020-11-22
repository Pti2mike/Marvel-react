import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loader-spinner";

const Characters = () => {
  const [data, setData] = useState({}); // Permet de gérer les données
  const [isLoading, setIsLoading] = useState(true); // Permet de gérer le fait que l'objet soit vide au chargement du composant

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-v1.herokuapp.com/characters"
        );
        // console.log(response.data); // Je vérifie que je récupère les données du backend qui est un objet
        setData(response.data);
        setIsLoading(false); // il faut passer ce state à false afin que la page ne se charge pas indéfiniment
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loader">
      <Loader
        type="TailSpin"
        color="#ff0000"
        height={300}
        width={300}
        timeout={3000}
      />
    </div>
  ) : (
    <div>
      <div className="search-wrapper">
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
      <h1>Characters</h1>

      <div className="characters-wrapper">
        {/* J'utilise data.results qui est un tableau avec le détail des personnages pour faire le map() */}
        {data.results.map((characters, index) => {
          console.log(characters);
          return (
            <div key={index} className="characters">
              <div className="characters-details">
                <img
                  className="characters-photo"
                  src={
                    characters.thumbnail.path +
                    "." +
                    characters.thumbnail.extension
                  }
                  alt={characters.name}
                />
                <h2 className="characters-name">{characters.name}</h2>
              </div>
              <div className="characters-descr">
                <p>{characters.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
