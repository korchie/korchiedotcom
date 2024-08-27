import SocialMedia from "./SocialMedia"
import Navbar from "./Navbar"
import Name from "./Name"
import korchieNPreshNew3 from "../images/korchieNPreshNew3.png";


export default function ContactMe() {
    return (

        <div>

            {/* <a href="/">Back</a> */}
            <Name />
            <Navbar />
            <div className="emailContact">

                <p>Contact me via email at:</p>
                <p><a href="mailto:stephanie.korch@gmail.com">stephanie.korch@gmail.com</a></p>
                <img src={korchieNPreshNew3} className="korchieNPreshNew3" />

            </div>

            <SocialMedia />

        </div>

    )
}