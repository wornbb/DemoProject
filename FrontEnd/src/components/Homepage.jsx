import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Title from "./partials/Title";
import Highlights from "./partials/Highlights";
import Gameshow from "./partials/Gameshow";
import Contact from "./partials/Contact";
import Hr from "./partials/Hr";


function Homepage() {
    return (
        <div>
            <Header />
            <Title />
            <Hr />
            <Highlights />
            <Hr />
            <Gameshow />
            <Hr />
            <Contact />
            <Hr />
            <Footer />
        </div>);
}

export default Homepage;