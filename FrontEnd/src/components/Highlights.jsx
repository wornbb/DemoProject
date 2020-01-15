import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Highlights() {
    return (
        <div class="white-section" id="highlights">
                <Row>
                    <Col className="highlight-box" lg={true} md={true} sm={true}>
                        <i className="icon fas fa-dice-d20 fa-5x" />
                        <h3 className="hl-heading">Highlight-1</h3>
                        <p>This Games is blablablablablabla</p>
                    </Col>
                    <Col className="highlight-box" lg={true} md={true} sm={true}>
                        <i className="icon fas fa-dice-d6 fa-5x" />
                        <h3 className="hl-heading">Highlight-2</h3>
                        <p>This Games is blablablablablabla</p>
                    </Col>
                    <Col className="highlight-box" lg={true} md={true} sm={true}>
                        <i className="icon fas fa-dice fa-5x" />
                        <h3 className="hl-heading">Highlight-3</h3>
                        <p>This Games is blablablablablabla</p>
                    </Col>
                </Row>
        </div >);
}

export default Highlights;