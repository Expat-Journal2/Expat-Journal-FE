import React from "react";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="home">
            <h1>Foreigner Files</h1>
            <h2>The place for you to show off where you've been and what you've done!</h2>
            <Link to="/register"><button>Sign Up</button></Link>
            <Link to="/login"><button>Log In</button></Link>
        </div>
    )
}

export default Home;