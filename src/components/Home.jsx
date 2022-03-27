import React from "react";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="assets/bg3.jpg"
          className="card-img"
          alt="background"
          height="730px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder md-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aliquid atque perspiciatis autem est cupiditate corrupti maiores
              similique. Reiciendis neque assumenda dignissimos ex. Atque quis
              tempore laudantium repellat beatae esse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
