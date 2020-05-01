import React from 'react';
import {PLCard, BackEndCard, UICard, ReactCard1, ReactCard2, ReactCard3} from './Cards'
import {CardColumns} from "reactstrap"

function About(){
    return (
        <div className="aboutcards">
        <h1>Foreigner Files Team</h1>
        <CardColumns >
            <PLCard />  
            <BackEndCard />
            <UICard />  
            <ReactCard1 />
            <ReactCard2 />
            <ReactCard3 />
        </CardColumns>


        </div>
    )
}

export default About;