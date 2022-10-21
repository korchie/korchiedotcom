import SocialMedia from "./SocialMedia"
import Navbar from "./Navbar"

export default function Portfolio() {
    return (
        <div>

            <a href="/">Back</a>

            <Navbar />
            <p>
                I am looking to change my career path and pursue a position as a Full-Stack JavaScript Developer. I have always had a
                passion for technology and am extremely excited to move in the direction of the tech industry. I recently graduated from
                Grand Circus' coding program and was a Rocket Pro TPO Executive Title Coordinator with Rocket Mortgage. I really enjoyed
                my time spent using computers and technology to get my job done and desire to take this to the next level.
            </p>

            <p>
                Eduction:
            </p>

            {/* <p> */}
            <ul>
                <li>Grand Circus, Detroit, MI</li>
                <li>Full-Stack Javascript Bootcamp</li>
                <li>May 2021 - November 2021</li>

                <p>Projects include:</p>
                <li><a href="https://what-s-out-there.web.app/">What's Out There?:</a> Uses React and Firebase. Frontend and backend elements. 4 API calls. Designated Dark Park locator.</li>
                <li>React API Search Engine: Uses TypeScript and React and Ticketmaster API to locate events in a certain zip code.</li>
                <li>JavaScript Budget App: Use of JavaScript and DOM manipulation to create a budget calculator.</li>
            </ul>

            <ul>
                <li>Wayne State University, Detroit, MI
                    <li>Bachelor of Arts, Sociology</li>
                    <li>August 2007 - December 2009</li>
                </li>
            </ul>
            {/* </p> */}

            <p>Technical Skills:</p>
            <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Express & APIs</li>
                <li>Firebase</li>
                <li>MongoDB & SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git Bash/Terminal</li>
            </ul>

            {/* add pdf? */}

            <SocialMedia />


        </div>
    )
}