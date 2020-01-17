import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Signin from "./Signin";


function App() {

   
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Route path="/signup">

                    <Signup />

                </Route>

                <Route path="/signin">
                    <Signin />
                </Route>

            </Switch>
        </Router>
    );


}

export default App;