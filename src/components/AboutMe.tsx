import sk_transBack from "../images/sk_transBack.png";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";

export default function AboutMe() {
    return (

        <div>

            <a href="/">Back</a>


            <img src={sk_transBack} className="sk_transBack" />

            <p>
                Hello! I'm looking to make a career change to web development. I am trained in JavaScript, and have learned both front and backend aspects of coding. I, specifically, have an interest in UI and have confidence in using React. I really enjoy learning new coding skills and can't wait to see what my future holds in programming!
            </p>

            <p>
                A little more about myself, I make handmade rugs in my free time. Please check out my Rugs section to check some of the ones I've made out! I play ice hockey. I ride a motorcycle. I am a gamer. I have a cat named Precious. I love rock music.
            </p>

            <Navbar />
            <SocialMedia />

        </div>

    )
}