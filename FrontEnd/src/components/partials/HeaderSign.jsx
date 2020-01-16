import React from "react";
import Navbar from 'react-bootstrap/Navbar';



function HeaderSign() {
    return (
        <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" className="navProperty">
            <Navbar.Brand className="navBrand" href="https://www.google.ca">GameName</Navbar.Brand>
        </Navbar>
        </div>
    );
}

export default HeaderSign;