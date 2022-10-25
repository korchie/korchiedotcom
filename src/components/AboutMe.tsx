import sk_transBack from "../images/sk_transBack.png";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Name from "./Name";

export default function AboutMe() {
    return (

        <div>

            {/* <a href="/">Back</a> */}

            <Name />

            <Navbar />

            <div className="amContainer">
                <img src={sk_transBack} className="sk_transBack" />

                <div className="amBlerb">

                    {/* <p>
                        Hello! I'm looking to make a career change to web development. I am trained in JavaScript, and have learned both front and backend aspects of coding. I, specifically, have an interest in UI and have confidence in using React. I really enjoy learning new coding skills and can't wait to see what my future holds in programming!
                    </p> */}

                    <p>
                        When I'm not coding, I make handmade rugs in my free time. I do this with a tufting gun, lots of yarn, glue, and scissors. I create designs and/or use selected images and artwork. Please check out my Rugs tab above to check some of the ones I've created! I play ice hockey, but haven't skated since pre-pandemic. I ride a motorcycle. I have a 2021 KTM 390 Adventure and have riden as far as Colorado and Texas from my home in Metro Detroit, Michigan. I will be making more road trips in the future! I am a gamer. I mostly play on PC now-a-days, but really enjoy "retro" gaming and also have a Nintendo Switch and Playstation 4. I have a cat named Precious, a 15-year-old rescue kitty. I love rock music! I have recently gotten into 3D printing.
                    </p>

                    {/* add motorcycle trip pic? */}

                </div>

            </div>

            <SocialMedia />

        </div>

    )
}