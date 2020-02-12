import React from "react";
import HeaderSign from "./partials/HeaderSign";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";


function Signup() {
    // handle mouse event
    const [isMouseOver, setMouseOver] = React.useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handelMouseOut() {
        setMouseOver(false)
    }

    // handle user input
    const [signupinfo, setSignupInfo] = React.useState({
        email: "",
        password: "",
        confirmedPassword: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setSignupInfo(prevValue => {

            return {
                ...prevValue,
                [name]: value
            };
        }
        )
    }

    // handel cookie
    const cookies = new Cookies();

    const [isSignUp, setIsSignUp] = React.useState(false);

    //if successfully sign up
    const history = useHistory();

    function handleClickSignin() {
        history.replace("/signin");
    }

    // once submit button is clicked
    const submit = e => {
        e.preventDefault()
        //check if passwords are matched or not
        if (signupinfo.password !== signupinfo.confirmedPassword) {
            alert('Password Not Match!');
        }
        // check if no user input
        else if (signupinfo.email === "" || signupinfo.password === "" || signupinfo.confirmedPassword === "") {
            alert("Missing Info!")
        }
        // post cookie to server
        else {
            console.log("Hello");
            cookies.set(
                "userInfo",
                signupinfo,
                { path: "/signup" }
            );
            console.log(cookies);
            fetch(`https://hooks.zapier.com/hooks/catch/6496049/ohmhx9b/`, {
                credentials: 'same-origin',
                method: 'POST',
                body: cookies,
            }).then(() => setIsSignUp(true)); /* handle response*/ 
        }
    }


    const form =
        <div className="container" onSubmit={submit}>
            <HeaderSign />
            <div>
                <form className="form">
                    <img className="mb-4" src="imgs/lgd-logo.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Signup to this Game!</h1>
                    <input type="email" placeholder="Email" onChange={handleChange} name="email" value={signupinfo.email} />
                    <input type="password" placeholder="Password" onChange={handleChange} name="password" value={signupinfo.password} />
                    <input type="password" placeholder="Confirm Password" onChange={handleChange} name="confirmedPassword" value={signupinfo.confirmedPassword} />
                    <button type="submit" style={{ backgroundColor: isMouseOver ? "#8ac6d1" : "#7fa998" }}
                        onMouseOver={handleMouseOver} onMouseOut={handelMouseOut}>Sign up</button>
                </form>
            </div>
        </div>


    const success =
        <div className="container">
            <HeaderSign />
            <h1 className="success-heading"><span role="img" aria-label="SmileFace">😘</span>Thank you for your support!<span role="img" aria-label="SmileFace">😘</span></h1>
            <Button className="btn" variant="dark" size="lg" onClick={handleClickSignin}>
                <i className="fas fa-sign-in-alt" /> Sign in
                        </Button>
        </div>

    return (isSignUp ? success : form);


}

export default Signup;