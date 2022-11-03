import sk_transBack from "../images/sk_transBack.png";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Name from "./Name";
import motorcyclepic from "../images/motorcycleSelfie.jpg";

export default function AboutMe() {
    return (

        <div>

            {/* <a href="/">Back</a> */}

            <Name />

            <Navbar />

            <div className="amContainer">

                <div className="amContainer2">
                    <img src={sk_transBack} className="sk_transBack" />
                    <div className="amContainer3">

                        <p>I'm a recent graduate of a coding bootcamp by Grand Circus based out of Detroit, MI. There, I learned JavaScript in a full-stack methodology. I enjoy the front-end the most and have an interest in UI and UX approaches to products and designs. I have confidence in using React. I have additionally worked with TypeScript, HTML, CSS, Express & APIs, Firebase, and MongoDB & SQL.</p>


                        <div className="amContainer4">
                            <p>This is a career change for me, and a really exciting one, as I'm now working in a field I have a passion for! I have a great deal of experience with customer service ranging from retail, email customer support for StockX, phone call center for a major Medicaid health insurance company in Michigan and Illinois. I have also worked as an Administrative Assistant at a non-profit substance abuse treatment center, which was very near and dear to my heart!</p>

                        </div>


                    </div>
                </div>

                <div className="amContainer5">
                    <p className="hobbiesBlerb">
                        When I'm not coding, I make handmade rugs in my free time. I do this with a tufting gun, lots of yarn, glue, and scissors. I create designs and/or use selected images and artwork. Please check out the Rugs tab above to check some of the ones I've created! I play ice hockey, but haven't skated since pre-pandemic. I ride a motorcycle. I have a 2021 KTM 390 Adventure and have riden as far as Colorado and Texas from my home in Metro Detroit, Michigan. I will be making more road trips in the future! I am a gamer. I mostly play on PC now-a-days, but really enjoy "retro" gaming and also have a Nintendo Switch and Playstation 4. I have a cat named Precious, a 15-year-old rescue kitty. I love rock music! I have recently gotten into 3D printing.
                    </p>
                    <img src={motorcyclepic} className="motorcyclePic" />

                </div>

            </div>

            <SocialMedia />

        </div>

    )
}