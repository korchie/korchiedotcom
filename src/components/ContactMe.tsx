import SocialMedia from "./SocialMedia"
import Navbar from "./Navbar"
import Name from "./Name"
import korchieNPreshNew3 from "../images/korchieNPreshNew3.png";
import ContactForm from "../components/ContactForm";



export default function ContactMe() {
    return (

        <div>

            <Name />
            <Navbar />

            {/* <div className="emailContact">

                <p>Contact me via email at:</p>
                <p><a href="mailto:stephanie.korch@gmail.com">stephanie.korch@gmail.com</a></p>
                <img src={korchieNPreshNew3} className="korchieNPreshNew3" />

            </div> */}

            <div style={{ 
        minHeight: '70vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem 1rem'
      }}>
        <div className="contactDiv">
            <img src={korchieNPreshNew3} className="korchieNPreshNew3" />
        <ContactForm />

        </div>
      </div>

            <SocialMedia />

        </div>

    )
}