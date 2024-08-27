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
import RugCarousel from "./RugCarousel";

export default function Rugs() {
    return (
        <div>

            {/* <a href="/">Back</a> */}
            <Name />
            <Navbar />

            <div className="rugsBlerb">

                <p>I make custom, handmade rugs in my free time!</p>

                <p>Here are some of the rugs I've already made!</p>


            </div>

            <RugCarousel />

            {/* <p className="rugOrder">Please contact me if you have interest in a custom rug order!</p> */}
            <table>

                {/* <td><img src={zamboni} /></td>
                <td><img src={supernatural} /></td>
                <td><img src={wat} /></td>
                <tr></tr>
                <td><img src={sao} /></td>
                <td><img src={uptruck} /></td>
                <td><img src={gyarados} /></td>
                <tr></tr>
                <td><img src={gloriapeony} /></td>
                <td><img src={michelepeony} /></td>
                <td><img src={snorlax} /></td>
                <tr></tr>
                <td><img src={redwings} /></td>
                <td><img src={magikarp} /></td> */}
                {/* <td><img src={pikachu} /></td> */}

            </table>

            <SocialMedia />

        </div >
    )
}