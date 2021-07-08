import React from "react";
import clock from "../img/clock.svg";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      {/* Time and name */}
      <div>
        <div className="card__header">
          <img src={clock} alt="" className="card__logo" />
          <h6 className="card__time">8:35</h6>
        </div>
        <h3 className="card__name">Bob Singh</h3>
      </div>

      <div className="card__subgroup">
        {/* Age */}
        <div>
          <h6 className="card__subtitle">Age</h6>
          <h3 className="card__data">18</h3>
        </div>

        {/* Height */}
        <div>
          <h6 className="card__subtitle">Height</h6>
          <h3 className="card__data">
            162<span style={{ fontSize: "25px" }}>cm</span>
          </h3>
        </div>

        {/* Weight */}
        <div>
          <h6 className="card__subtitle">Weight</h6>
          <h3 className="card__data">
            45<span style={{ fontSize: "25px" }}>kg</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
