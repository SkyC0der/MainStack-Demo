import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div id="hero">
      <div className="hero-content">
        <h1>
          Create a one-page site to showcase your incredible works and{" "}
          <span className="text-pink">get more clients.</span>
        </h1>
        <p className="text-gray">
          Mainstack connects your audience to all of your content, productivity
          with just one click to boost conversion rate.
        </p>
        <div className="link-form">
          <div className="form-box">
            <h6 className="mb-0 fw-regular inter">MainStack.app/</h6>
            <input
              type="text"
              placeholder="yourname"
            />
            <div className="ms-auto ps-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15L3 10L4.41 8.58L8 12.17L15.59 4.58L17 6L8 15ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                  fill="#9FA6B8"
                ></path>
              </svg>
            </div>
          </div>
          <button className="btn">Create Your Stack</button>
        </div>
      </div>
      <div className="hero-img">
        <div className="hero-img-box">
          <img src="/assets/frame_2.jpg" alt="" />
        </div>
        <div className="hero-img-box">
          <img src="/assets/frame_1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
