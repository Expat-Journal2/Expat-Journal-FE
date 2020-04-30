import React from "react";
import {FooterBar} from "../assets/StyledComponents"

function Footer(){

    return (
        <FooterBar className="footer">

        <p className="footerp">Foreigner Files © COPYRIGHT {new Date().getFullYear()} </p>
        </FooterBar>
    )
}
export default Footer

