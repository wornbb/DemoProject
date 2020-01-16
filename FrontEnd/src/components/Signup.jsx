import React from "react";
import Input from "./Input";
import HeaderSign from "./HeaderSign";



function Signup() {

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
                <h1 className="h3 mb-3 font-weight-normal">Signup to this Game!</h1>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <button type="submit" style={{ backgroundColor: isMouseOver ? "#8ac6d1" : "#7fa998" }}
                    onMouseOver={handleMouseOver} onMouseOut={handelMouseOut}>Sign up</button>
            </form>
        </div>
        </div>
    );

}

export default Signup;