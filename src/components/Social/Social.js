import React from "react";
import "./Social.scss";
function Social() {
  let data = [
    { logo: "ytmusic_logo.svg", className: "text-red" },
    { logo: "twitter.svg", className: "text-blue" },
    { logo: "spotify.svg", className: "text-green" },
    { logo: "apple_music.svg", className: "text-pink" },
  ];
  return (
    <div id="social">
      {data.map(({ logo, className, id }, key) => (
        <div className="social-card" key={key}>
          <div className="social-title">
            <div className="social-logo">
              <img src={"/assets/" + logo} alt="#" className="social-icon" />
            </div>
            <h4 className={className}>Share your favourite youtube playlist</h4>
          </div>
          <div className="text-content">
            <p>
              <span className="text-dark">
                See your most important conversations first. Snooze, archive, or
                jump back in.&nbsp;
              </span>
              Activity Feed always keeps your conversations within reach, so you
              can quickly catch up on what’s new.
            </p>
          </div>
          <div className="iphone-bg">
            <img src="/assets/iphone_frame.png" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Social;
