import React from "react";
import "./Pay.scss";

function Pay() {
  return (
    <div id="pay">
      <div className="pay-1">
        <div className="content">
          <h4 className="text-purple">Collect payment from your fans</h4>
          <p>
            See your most important conversations first.{" "}
            <span className="text-muted">
              Snooze, archive, or jump back in.
            </span>{" "}
          </p>
        </div>

        <div className="form card">
          <form action="#">
            <h4>Buy Marvellous A Coffee</h4>
            <input type="email" name="Email" placeholder="Email"  />
            <input type="email" placeholder= "Your Name (Optional)" name="Email"  />
            <textarea
              name="Message"
              placeholder="Your Message"
              cols="30"
              rows="4"
            ></textarea>
            <button className="buy-btn">
              Buy <strong>$10</strong> coffee
            </button>
          </form>
        </div>
      </div>
      <div className="pay-2">
        <div className="content">
          <h4 className="text-orange">Collect payment from your fans</h4>
          <p>
            See your most important conversations first.{" "}
            <span className="text-muted">
              Snooze, archive, or jump back in.
            </span>{" "}
          </p>
        </div>

        <div className="card mb-3">
          <img
            src="/assets/conference.jpg"
            className="card-img-top"
            alt="conference"
          />
          <div className="card-body">
            <h4 className="card-title">Design Seminar</h4>
            <p className="card-text">
              <small className="text-blue">Sat, Sep 18, 12:00PM</small>
            </p>
            <p>
              The Unbound Fest event presents one of those life changing
              encounters. At this festival, you get to experience the
              counterculture Group...<strong>read more</strong>
            </p>
            <button className="event-register">
              Register with <strong>$10</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;
