import React from "react";
import Loader from "react-loader-spinner";

const Favoris = () => {
  return (
    <>
      <div className="loader">
        <Loader
          type="TailSpin"
          color="#ff0000"
          height={300}
          width={300}
          timeout={100000000}
        />
      </div>
      <p>Sorry, I am still working on it...😓</p>
    </>
  );
};

export default Favoris;
