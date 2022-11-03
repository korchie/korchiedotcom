import Name from "./Name"
import Navbar from "./Navbar"
import SocialMedia from "./SocialMedia"
import korchie2transback from "../images/korchie2transback.png";

export default function Homepage() {
    return (

        <div>

            <Name />
            <Navbar />

            <div className="homepageContainer">


                <img src={korchie2transback} className="korchie2transback" />


                <div className="homepageWords">
                    <p>
                        Hello, I'm Stephanie! I'm a Full-Stack JavaScript Developer.
                    </p>

                    <p>
                        I'm a recent graduate of a coding bootcamp by Grand Circus based out of Detroit, MI. There, I learned JavaScript in a full-stack methodology. I enjoy the front-end the most and have an interest in UI and UX approaches to products and designs. I have confidence in using React. I have additionally worked with TypeScript, HTML, CSS, Express & APIs, Firebase, and MongoDB & SQL.
                    </p>

                    <p>
                        This is a career change for me, and a really exciting one, as I've previously come from working in the mortgage industry. I have a great deal of experience with customer service ranging from retail, email customer support for StockX, phone call center for a major Medicaid health insurance company in Michigan and Illinois. I have also worked as an Administrative Assistant at a non-profit substance abuse treatment center, which was very near and dear to my heart!
                    </p>


                </div>

            </div>

            <SocialMedia />

        </div>
    )
}