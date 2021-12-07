import React from 'react'
import "./Info.scss"

function Info() {
    return (
        <div id="info">
            <div className="info-content">
                <div className="info-text">
                    <h3>Conversations designed for people, not bots.</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                       Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim</p>
                </div>
                <button className="btn">Get Started</button>
            </div>
            <div className="info-img">
                <div className="img-info">
                    <img src="/assets/image_16.png" alt="features" />
                </div>
                <div className="img-info">
                    <img src="/assets/image_16.png" alt="features" />
                </div>
            </div>
        </div>
    )
}

export default Info
