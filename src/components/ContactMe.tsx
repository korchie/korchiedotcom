import SocialMedia from "./SocialMedia"
import Navbar from "./Navbar"
import Name from "./Name"


export default function ContactMe() {
    return (

        <div>

            {/* <a href="/">Back</a> */}
            <Name />
            <Navbar />

            <p>Contact me via email at:</p>
            <p>stephanie.korch@gmail.com</p>

            <SocialMedia />

        </div>

    )
}