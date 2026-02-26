import Name from "./Name"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"
import korchie2transback from "../images/korchie2transback.png";
import korchieCompBaldurAxel from "../images/korchieCompBaldurAxelTransBack.png";
import korchieKrittersLogo from "../images/KorchieKritters logo.png";
import korchieNPreshNew2 from "../images/korchieNPreshNew2.png";

export default function Homepage() {
    return (
        <div>
            <Name />
            <Navbar />

            <div className="homepageContainer">
                <img src={korchieCompBaldurAxel} className="korchie2transback" />
                <div className="homepageWords">
                    <p className="homepageBlerb">
                        Hello, I'm Stephanie! I'm a Full-Stack JavaScript Developer.
                    </p>
                    <p className="homepageBlerb2">I build and design webpages.</p>
                    <p className="homepageBlerb3">Need a website? <a href="/contactme" className="lets-talk-btn">Let's talk!</a></p>
                </div>
            </div>

            {/* <div className="container2">
                <a href="http://korchiekritters.etsy.com/">
                    <div className="etsyWords">
                        <h1 className="store">Check out my Store!</h1>
                        <h2 className="store">I sell T-Shirts and stickers!</h2>
                    </div>
                </a>
                <div className="kKLogoContainer">
                    <a href="http://korchiekritters.etsy.com/">
                        <img src={korchieKrittersLogo} className="korchieKrittersLogo" alt="Korchie Kritters Logo" />
                    </a>
                </div>
            </div> */}

            <SocialMedia />
        </div>
    )
}