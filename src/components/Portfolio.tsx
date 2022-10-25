import SocialMedia from "./SocialMedia"
import Navbar from "./Navbar"
import Name from "./Name"

export default function Portfolio() {
    return (
        <div>

            {/* <a href="/">Back</a> */}

            <Name />

            <Navbar />

            {/* add pic? */}

            <p className="portfolioBlerb">
                I am looking to change my career path and pursue a position as a Full-Stack JavaScript Developer. I have always had a
                passion for technology and am extremely excited to move in the direction of the tech industry. I recently graduated from
                Grand Circus' coding program and was a Rocket Pro TPO Executive Title Coordinator with Rocket Mortgage. I really enjoyed
                my time spent using computers and technology to get my job done and desire to take this to the next level.
            </p>

            <div className="edContainer">

                <p className="edTitle">
                    Eduction:
                </p>

                {/* <p> */}
                <ul>
                    <li className="ed">Grand Circus, Detroit, MI</li>
                    <li className="ed">Full-Stack Javascript Bootcamp</li>
                    <li className="ed">May 2021 - November 2021</li>

                    <p className="projectsTitle">Projects include:</p>
                    <li><a href="https://what-s-out-there.web.app/">What's Out There?:</a> Uses React and Firebase. Frontend and backend elements. 4 API calls. Designated Dark Park locator.</li>
                    <li>React API Search Engine: Uses TypeScript and React and Ticketmaster API to locate events in a certain zip code.</li>
                    <li>JavaScript Budget App: Use of JavaScript and DOM manipulation to create a budget calculator.</li>
                </ul>

                <ul>
                    <li className="ed">Wayne State University, Detroit, MI
                        <li className="ed">Bachelor of Arts, Sociology</li>
                        <li className="ed">August 2007 - December 2009</li>
                    </li>
                </ul>
                {/* </p> */}

                <p className="skillsTitle">Technical Skills:</p>
                <ul>
                    <li className="ed">React</li>
                    <li className="ed">TypeScript</li>
                    <li className="ed">JavaScript</li>
                    <li className="ed">Express & APIs</li>
                    <li className="ed">Firebase</li>
                    <li className="ed">MongoDB & SQL</li>
                    <li className="ed">HTML</li>
                    <li className="ed">CSS</li>
                    <li className="ed">Git Bash/Terminal</li>
                </ul>

            </div>



            <SocialMedia />


        </div>
    )
}