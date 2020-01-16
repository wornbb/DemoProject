import React from "react";
import HeaderSign from "./HeaderSign";



function Signin() {

    const [isMouseOver, setMouseOver] = React.useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handelMouseOut() {
        setMouseOver(false)
    }

    return (
        <div className="container">
            <HeaderSign />
        <div>
            <form className="form">
                <img className="mb-4" src="imgs/lgd-logo.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Welcome Back!</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" style={{ backgroundColor: isMouseOver ? "#8ac6d1" : "#7fa998" }}
                    onMouseOver={handleMouseOver} onMouseOut={handelMouseOut}>Log in</button>
            </form>
        </div>
        </div>
    );

}

export default Signin;