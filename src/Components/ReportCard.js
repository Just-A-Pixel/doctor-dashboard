import React from "react";

function Report() {
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

        <div>
          <h6 className="card__subtitle">Report</h6>
          <h3
            className="card__data"
            style={{ fontSize: "20px", textAlign: "center", maxWidth: '500px' }}
          >
            Lorem ipsum dolor sit amet. Est rerum aspernatur eum porro iste et
            placeat impedit est exercitationem omnis et quia corporis aut
            recusandae iste. Est sunt eveniet sit omnis architecto non dolorem
            voluptas vel quia accusamus.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Report;
