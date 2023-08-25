import React from "react";
import footerCCCLogo from "../assets/images/footerCCCLogo.png";
import footerMap from "../assets/images/footer-map.png";
import twitterLogo from "../assets/images/twitterLogo.png";
import youtubeLogo from "../assets/images/youtubeLogo.png";
import instagramLogo from "../assets/images/instagramLogo.png";
import facebookLogo from "../assets/images/facebookLogo.png";


const Footer = () => {

    return (
        <>

            <div className="row footer" >
                <img alt="footerCCCLogo" src={footerCCCLogo} className="footer-logo" />
                <div >
                    <h3 className="footer-font">MORE INFO</h3>
                    <p className="footer-navigation">About Us</p>
                    <p className="footer-navigation">FAQ</p>
                    <p className="footer-navigation">Contact Us</p>
                </div>
                <div>
                    <h3 className="footer-font">FIND US</h3>
                    <div className="row">
                        <img src={footerMap} className="footer-image" alt="Map" />
                        <p className="paragraph">Lorem ipsum dolor, sit amet consectetuer</p>
                    </div>
                </div>
                <div>
                    <h3 className="footer-font">FOLLOW US</h3>
                    <img src={twitterLogo} className="media-icons" alt="Twitter"/>
                    <img src={youtubeLogo} className="media-icons" alt="YouTube"/>
                    <img src={instagramLogo} className="media-icons" alt="Instagram"/>
                    <img src={facebookLogo} className="media-icons" alt="Facebook"/>
                </div>
                
            </div>
            <div className="footer copyright">
                <p>The Classic Cinema Company Ltd 2020. All rights reserved</p>
            </div>
            

        </>
    )
}


export default Footer