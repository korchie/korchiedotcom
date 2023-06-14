import Name from "./Name"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"
import korchie2transback from "../images/korchie2transback.png";
import korchieKrittersLogo from "../images/korchiekrittersLogoTrans_altfont.png";

export default function Homepage() {
    return (
        <div>
            <Name />
            <Navbar />

            <div className="homepageContainer">
                <img src={korchie2transback} className="korchie2transback" />
                <div className="homepageWords">
                    <p className="homepageBlerb">
                        Hello, I'm Stephanie! I'm a Full-Stack JavaScript Developer.
                    </p>
                    <p className="homepageBlerb2">I build and design webpages.</p>
                    <p className="homepageBlerb3">Need a website? Let's talk!</p>
                </div>
            </div>

            <div className="container2">
                <a href="https://korchiekritters.etsy.com/">
                    <h1>Check out my Etsy Shop!</h1>
                    <h2>All T-shirts & Stickers designed by me!</h2>
                </a>
                <div className="kKLogoContainer">
                    <a href="https://korchiekritters.etsy.com/">
                        <img src={korchieKrittersLogo} className="korchieKrittersLogo" alt="Korchie Kritters Logo" />
                    </a>
                </div>
            </div>

            <SocialMedia />
        </div>
    )
}
