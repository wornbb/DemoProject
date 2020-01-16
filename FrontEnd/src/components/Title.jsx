import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function Title() {
    const history = useHistory();

    function handleClickSignup() {
        history.push("/signup");
    }

    function handleClickSignin() {
        history.push("/signin");
    }


    return (
        <div className="color-section" id="title">
            <Row>
                <Col className="imgCol" lg={true} >
                    <div>
                        <img className="titleImage" src="imgs\gamelogo.png" alt="There should be a person here" />
                    </div>
                </Col>
                <Col lg={true} md={true} sm={true}>
                    <div className="textCol">
                        <h1 className="big-heading">Are you ready for this little funny game?</h1>
                    </div>
                    <div>
                    <Button className="btn" variant="light" size="lg" onClick={handleClickSignup}>
                        <i className="fas fa-user-plus" /> Sign Up
                        </Button>
                    <Button className="btn" variant="dark" size="lg" onClick={handleClickSignin}>
                        <i className="fas fa-sign-in-alt" /> Sign in
                        </Button>
                    <Button className="btn" variant="secondary" size="lg">
                        <i className="fab fa-google-play" /> Download
                        </Button>
                        </div>

                </Col>
            </Row>
            <Row>

            </Row>
        </div>);




}


export default Title;