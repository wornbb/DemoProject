import React from "react";
import Carousel from 'react-bootstrap/Carousel';



function Gameshow() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="white-section" id="gameshow">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="gameImage"
                            src="imgs\Charmander.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 className="slide-caption">blablablablablabla</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="gameImage"
                            src="imgs\Bulbasaur.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5 className="slide-caption">blablablablablabla</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="gameImage"
                            src="imgs\Squirtle.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5 className="slide-caption">blablablablablabla</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


        </div >);
}

export default Gameshow;