import Name from "./Name"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"
import korchie2transback from "../images/korchie2transback.png";

export default function Homepage() {
    return (

        <div>

            <Name />
            <Navbar />

            <p className="mainBlerb">
                Hello, I'm Stephanie. I'm a Full-Stack JavaScript Developer.
            </p>
            <img src={korchie2transback} className="korchie2transback" />

            <SocialMedia />

        </div>
    )
}