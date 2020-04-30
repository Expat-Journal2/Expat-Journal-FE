import React from "react";
import {Link} from 'react-router-dom';
import screenshot from "../images/screenshot.jpg"
import "./Home.css"

function Home(){
    return(
        <div className="home">
            <div className="home-header">
                <section>
                    <h2>
                        Welcome to <span className="title">Foreigner Files</span>
                    </h2>
                    <p>The home of beautiful pictures and stories from expats around the world</p>
                </section>
                <Link to="/register"><button>Get Started</button></Link>
            </div>
            <div className="home-body">
                <div className="body-left">
                    <p className="large-text">
                    <span className="title">Foreigner Files</span> allows you to share your most valued <span className="highlight">photos</span> along with the tales and <span className="highlight">stories</span> describing how and where the photo took place.
                    </p>
                </div>
                <div className="body-right"> 
                    <img src={screenshot} />
                </div>
            </div>
        </div>
    )
}

export default Home;