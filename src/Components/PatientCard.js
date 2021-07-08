import React from "react";
import "./PatientCard.css";
function PatientCard() {
  return (
    <div>
      <div className="card">
        {/* Time and name */}
        <div>
          <h3 className="card__name">Bob Singh</h3>
        </div>

        {/* Age */}
        <div>
          <h6 className="card__subtitle">Age</h6>
          <h3 className="card__data">18</h3>
        </div>

        {/* Height */}
        <div>
          <h6 className="card__subtitle">Last Visit</h6>
          <h3 className="card__data">
            12 <span style={{ fontSize: "15px" }}>days ago</span>
          </h3>
        </div>
      </div>
    
    </div>
  );
}

export default PatientCard;
