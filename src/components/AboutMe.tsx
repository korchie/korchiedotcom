import sk_transBack from "../images/sk_transBack.png";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Name from "./Name";
import motorcyclepic from "../images/motorcycleSelfie.jpg";
import KorchieCarousel from "./KorchieCarousel";
import korchieMotorcycle from "../images/aboutmepix/korchieMotorcycleTransBack.png";

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

                        {/* <p>I'm a graduate of the Grand Circus coding bootcamp based out of Detroit, MI. There, I learned JavaScript in a full-stack methodology. I enjoy front-end the most and have an interest in UI and UX approaches to products and designs. I have confidence in using React. I have additionally worked with TypeScript, HTML, CSS, Express & APIs, Firebase, and MongoDB & SQL.</p> */}
                        <p>
                            I'm a freelance web developer based in Southern Ohio.  I specialize in React with JavaScript. Check out my <a href="/portfolio">Portfolio page</a> for specifics!
                        </p>


                        <div className="amContainer4">
                            {/* <p>This is a career change for me, and a really exciting one, as I'm now working in a field I have a passion for! I have a great deal of experience with customer service ranging from retail, email customer support for StockX, phone call center for a major Medicaid health insurance company in Michigan and Illinois. I have also worked at a company that cleans pharmaceutical vials and bottles as the liason between the company and the customer. I have also worked as an Administrative Assistant at a non-profit substance abuse treatment center, which was very near and dear to my heart!</p> */}
                            <p>
                                Previously I have worked as a Production Assistant for a pharmaceutical sterilization company. I also have experience in the Mortgage industry, email-based customer support, call centers, substance abuse treatment, and retail (12 years!) I am an expert in customer service!
                            </p>
                        </div>


                    </div>

                </div>

                <div className="amContainer5">
                    <p className="hobbiesBlerb">
                        {/* When I'm not coding, I like to play videogames. Mario Kart is my game, but you will catch me playing Fortnite sometimes! I like to lerk in my boyfriend's videogame stream on Kick, which you can find <a href="http://kick.com/antinull">here.</a> I play ice hockey, but haven't skated since pre-pandemic. I ride a motorcycle. I have a 2021 KTM 390 Adventure and have riden as far as Colorado and Texas from my home in Metro Detroit, Michigan. I will be making more road trips in the future! I have 2 cats: Precious is a 16-year-old rescue kitty that spends her time laying in bed and being cute, and Baldur, who is 1 and loves hunting outside. He's pretty cute too! I also love listening to rock music and 3D printing. */}
                    </p>

                    <p>
                        When I'm not working, I enjoy playing Fortnite and Baldur's Gate. I love hockey and baseball and cheer for the Detroit Red Wings, Tigers (and Lions too!). I am a retired hockey player. I have a KTM 390 Adventure motorcycle, which I've ridden cross-country. Other hobbies include: 3D printing, being an at-home barista, and listening to rock music. I have 2 cats; Baldur and Axel.
                    </p>
                    <img src={korchieMotorcycle} className="korchieMotorcycle" />
                    {/* <img src={motorcyclepic} className="motorcyclePic" /> */}


                </div>
                {/* <KorchieCarousel /> */}

            </div>

            <SocialMedia />

        </div>

    )
}