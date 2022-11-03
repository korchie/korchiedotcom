import Name from "./Name"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"
import korchie2transback from "../images/korchie2transback.png";

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

            <SocialMedia />

        </div>
    )
}