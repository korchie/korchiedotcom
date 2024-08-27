import Carousel from 'react-bootstrap/Carousel';
import baldurRocks from "../images/aboutmepix/baldurRocks.jpg";
import eepyPresh from "../images/aboutmepix/eepyPresh.jpg";
import korchieMotorcycle from "../images/aboutmepix/korchieMotorcycle.jpg"
import korchieNPresh from "../images/aboutmepix/korchieNPresh.jpg";
import presh from "../images/aboutmepix/presh.jpg";



function KorchieCarousel() {
    return (
        <div className='carouselContainer'>
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={baldurRocks}
                        alt="Baldur lounging on the rock wall"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={eepyPresh}
                        alt="Preshy sleeping in the sun"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                {/* <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={korchieMotorcycle}
                        alt="Me riding my motorcycle"
                    /> */}
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                {/* </Carousel.Item> */}
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={korchieNPresh}
                        alt="Me and Precious"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={presh}
                        alt="Precious"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default KorchieCarousel;