import React from 'react'
import './Media.scss'

function Media() {
    return (
        <div id = "media">
            <div className="media-content">
                <h4>Set up all your media links</h4>

                <div className="text-content">
                    <h3>See your most important <span className="text-pink">conversations first.</span></h3>
                    <p>See your most important conversations first. Snooze, archive, or jump back in. Activity Feed always 
                        keeps your conversations within reach, so you can quickly </p>
                </div>

                <button className="btn">Get Started</button>
            </div>
            <div className="media-img">
                <div className="media-info">
                    <img src="/assets/tip.png" alt="tip-info" />
                </div>
            </div>
        </div>
    )
}

export default Media
