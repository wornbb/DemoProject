import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import Highlights from "./Highlights";
import Gameshow from "./Gameshow";
import Contact from "./Contact";
import Hr from "./Hr";

function App() {
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
        </div>

    );
}

export default App;