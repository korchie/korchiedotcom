import Carousel from 'react-bootstrap/Carousel';
import gloriapeony from "../images/rugs/gloriapeony.jpg";
import gyarados from "../images/rugs/gyarados.jpg";
import magikarp from "../images/rugs/magikarp.jpg";
import michelepeony from "../images/rugs/michelepeony.jpg";
import pikachu from "../images/rugs/pika.jpg";
import redwings from "../images/rugs/redwings.jpg";
import snorlax from "../images/rugs/snorlax.jpg";
import sao from "../images/rugs/sao.jpg";
import supernatural from "../images/rugs/supernatural.jpg";
import uptruck from "../images/rugs/UpTruck.jpg";
import wat from "../images/rugs/wat.jpg";
import zamboni from "../images/rugs/zamboni.jpg";
import SocialMedia from "./SocialMedia";
import Navbar from "./Navbar";
import Name from "./Name";
import crx from "../images/rugs/crx.jpg";
import mermaid from "../images/rugs/mermaid.jpg";

function IndividualIntervalsExample() {
    return (
        <div className='carouselContainer'>
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={mermaid}
                        alt="Mermaid rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={zamboni}
                        alt="Zamboni rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={crx}
                        alt="Honda CRX rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={magikarp}
                        alt="M Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={supernatural}
                        alt="Supernatural Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={wat}
                        alt="WAT Racing Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={sao}
                        alt="Sword Art Online Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={uptruck}
                        alt="Ford F-250 Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={gyarados}
                        alt="Gyarados Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={gloriapeony}
                        alt="Gloria Peony Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={michelepeony}
                        alt="Michele Peony Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={snorlax}
                        alt="Snorlax Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={redwings}
                        alt="Detroit Red Wings Rug"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block"
                        src={michelepeony}
                        alt="Michele Peony Rug"
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

export default IndividualIntervalsExample;