import React from "react";
import HeaderSign from "./HeaderSign";
import {Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";



function Signup() {

    const [isMouseOver, setMouseOver] = React.useState(false);
    const [signupinfo, setSignupInfo] = React.useState({
        email: "",
        password: "",
        confirmedPassword: ""
    });

    const [isSent, setIsSent] = React.useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handelMouseOut() {
        setMouseOver(false)
    }

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

    const history = useHistory();
    
    function handleClickSignin() {
        history.replace("/signin");
    }

    const submit = e => {
        e.preventDefault()
        if (signupinfo.password !== signupinfo.confirmedPassword){
            alert('Password Not Match!');
        }
        else {
        fetch(`https://hooks.zapier.com/hooks/catch/6496049/ohh1fb1/`, {
            method: 'POST',
            body: JSON.stringify(signupinfo),
        }).then(() => setIsSent(true))}
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

    return (isSent ? success : form);
    

}

export default Signup;