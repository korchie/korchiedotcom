import SocialMedia from "./SocialMedia"
import Navbar from "./Navbar"
import Name from "./Name"


export default function ContactMe() {
    return (

        <div>

            {/* <a href="/">Back</a> */}
            <Name />
            <Navbar />
            <div className="emailContact">

                <p>Contact me via email at:</p>
                <p><a href="mailto:stephanie.korch@gmail.com">stephanie.korch@gmail.com</a></p>

            </div>

            <SocialMedia />

        </div>

    )
}