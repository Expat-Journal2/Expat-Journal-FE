import React from "react";
import {Link} from 'react-router-dom';
import screenshot from "../images/screenshot.jpg"


function Home(){
    return(
        <div className="home">
            <div className="home-header">
                <section>
                    <h2  className="home-h2">
                        Welcome to <span className="home-title">Foreigner Files</span>
                    </h2>
                    <p className="home-p">The home of beautiful pictures and stories from expats around the world</p>
                </section>
                <Link to="/register"><button>Get Started</button></Link>
            </div>
            <div className="home-body">
                <div className="home-body-left">
                    <p className="home-large-text">
                    <span className="home-title">Foreigner Files</span> allows you to share your most valued <span className="home-highlight">photos</span> along with the tales and <span className="home-highlight">stories</span> describing how and where the photo took place.
                    </p>
                </div>
                <div className="home-body-right"> 
                    <img src={screenshot} />
                </div>
            </div>
        </div>
    )
}

export default Home;