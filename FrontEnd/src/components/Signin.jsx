import React from "react";
import HeaderSign from "./partials/HeaderSign";



function Signin() {

    // handle mouse event
    const [isMouseOver, setMouseOver] = React.useState(false);
    // const [isLogin, setIsLogin] = React.useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handelMouseOut() {
        setMouseOver(false)
    }



    // set user info
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setUser(prevValue => {

            return {
                ...prevValue,
                [name]: value
            };
        }
        )
    }

    const submit = e => {
        e.preventDefault()
        fetch(`https://hooks.zapier.com/hooks/catch/6496049/ohdgvlb/`, {
            method: 'POST',
            body: JSON.stringify(user),
        })
        // fetch verify info from backend
    }
    // 

    return (
        <div className="container">
            <HeaderSign />
            <div>
                <form className="form" onSubmit={submit}>
                    <img className="mb-4" src="imgs/lgd-logo.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Welcome Back!</h1>
                    <input type="email" placeholder="Email" onChange={handleChange} name="email" value={user.email} />
                    <input type="password" placeholder="Password" onChange={handleChange} name="password" value={user.password} />
                    <button type="submit" style={{ backgroundColor: isMouseOver ? "#8ac6d1" : "#7fa998" }}
                        onMouseOver={handleMouseOver} onMouseOut={handelMouseOut}>Log in</button>
                </form>
            </div>
        </div>
    );

}

export default Signin;