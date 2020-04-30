import React from 'react';
import {PLCard, BackEndCard, UICard, ReactCard1, ReactCard2, ReactCard3} from './Cards'
import {CardDeck} from "reactstrap"

function About(){
    return (
        <div className="aboutcards">
        <CardDeck>
            <PLCard />  
            <BackEndCard />
            <UICard />  
        </CardDeck>
        <CardDeck>
            <ReactCard1 />
            <ReactCard2 />
            <ReactCard3 />
        </CardDeck>

        </div>
    )
}

export default About;