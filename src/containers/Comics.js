import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>Comics is Loading</div>
  ) : (
    <div>
      <div className="comics-wrapper">
        <h1>Comics</h1>
        {data.results.map((comics, index) => {
          console.log(comics);
          return (
            <div>
              <div></div>

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
