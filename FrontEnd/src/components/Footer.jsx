import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className="color-section">
                <i className="socialicon fab fa-facebook fa-2x"></i>
                <i className="socialicon fab fa-instagram fa-2x"></i>
                <i className="socialicon fab fa-twitter-square fa-2x"></i>
                <i className="socialicon far fa-envelope fa-2x"></i>
                <h6 className="copyright">© {currentYear} Jarvis Gong & Yi Shen.</h6>
        </footer>
    
}


export default Footer;