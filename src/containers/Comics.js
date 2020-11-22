import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loader-spinner";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-v1.herokuapp.com/comics"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
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
          placeholder="Recherche des comics"
        />
      </div>
      <h1>Comics</h1>
      <div className="comics-wrapper">
        {data.results.map((comics, index) => {
          console.log(comics);
          return (
            <div>
              <div key={index} className="comics-content">
                <div className="comics-details">
                  <img
                    src={
                      comics.thumbnail.path + "." + comics.thumbnail.extension
                    }
                    alt={comics.title}
                  />
                  <h2 className="comics-name">{comics.title}</h2>
                </div>
                <div className="comics-descr">
                  <p>{comics.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
