import sk_transBack from "../images/sk_transBack.png";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Name from "./Name";
import motorcyclepic from "../images/motorcycleSelfie.jpg";
import KorchieCarousel from "./KorchieCarousel";
import korchieMotorcycle from "../images/aboutmepix/korchieMotorcycleTransBack.png";
import baldurAndAxel from "../images/aboutmepix/baldurAndAxel_no_background.png";

export default function AboutMe() {
    return (

        <div>

            {/* <a href="/">Back</a> */}

            <Name />

            <Navbar />

            <div className="amContainer">

                <div className="amContainer2">
                    <img src={sk_transBack} className="sk_transBack" alt="Stephanie smiling for the camera"/>
                    <div className="amContainer3">

                        {/* <p>I'm a graduate of the Grand Circus coding bootcamp based out of Detroit, MI. There, I learned JavaScript in a full-stack methodology. I enjoy front-end the most and have an interest in UI and UX approaches to products and designs. I have confidence in using React. I have additionally worked with TypeScript, HTML, CSS, Express & APIs, Firebase, and MongoDB & SQL.</p> */}
                        <p>
                            I'm a web developer based in rural, Southern Ohio.  I specialize in React with JavaScript. 
                            Check out my <a href="/portfolio">Portfolio</a> for specifics!
                        </p>


                        <div className="amContainer4">
                            <p>
                                By day, I work as a Data Analyst in financial services, after several years in data analytics 
                                for the market research industry. My background is a bit unconventional; I've worked across 
                                pharmaceutical production, mortgage services, customer support, administrative work at a 
                                substance abuse treatment center, and retail sales.
                            </p>
                        </div>


                    </div>

                </div>

                <div className="amContainer5">
                    <p className="hobbiesBlerb">
                    

                    
                        Outside of work, I'm a sports fan at heart. Hockey and baseball are my favorites, and I proudly 
                        cheer on the Detroit Red Wings, Tigers, and Lions. I'm a retired ice hockey player 
                        myself. When I'm not watching the game, you might find me out on my KTM 390 Adventure, which 
                        I've ridden across the country. I also dabble in 3D printing, enjoy pulling espresso shots as 
                        an at-home barista, and spend plenty of time playing Magic: The Gathering, video games, and board 
                        games. I share my home with two cats, Baldur and Axel.
                    </p>
                    <img src={korchieMotorcycle} className="korchieMotorcycle" alt="Stephanie riding her motorcycle"/>
                    {/* <img src={motorcyclepic} className="motorcyclePic" /> */}



                </div>
                    <div>
                        <p>
                        <img src={baldurAndAxel} className="catsPic" alt="My 2 cats: Baldur, a black cat, and Axel, a gray and white Tabby."/>
                    </p>
                    </div>
                {/* <KorchieCarousel /> */}

            </div>

            <SocialMedia />

        </div>

    )
}