import React from "react";
import "./Team.scss";

function Team() {
  return (
    <div id="team">
      <div className="team-content">
        <div className="text-content">
          <h2>Conversations designed for people, not bots.</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim.
          </p>
        </div>
        <button className="btn">Get Started</button>
      </div>
      <div className="team-grid-gallery">
        <div className="team-img-container">
          <img src="/assets/team_1.png" alt="team_1" />
        </div>
        <div className="img-flex-container">
          <div className="team-img-container">
            <img src="/assets/team_2.png" alt="team_1" />
          </div>
          <div className="team-img-container">
            <img src="/assets/team_3.png" alt="team_1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
