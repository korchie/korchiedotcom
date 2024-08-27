import SocialMedia from "./SocialMedia";
import Navbar from "./Navbar";
import Name from "./Name";
import korchie4 from "../images/korchie4.png";

export default function Portfolio() {
    return (
        <div>

            {/* <a href="/">Back</a> */}

            <Name />

            <Navbar />

            <div className="portfolioContainer">



            </div>


            <div className="containerAboveEd">


                {/* <p className="portfolioBlerb">
                    I am looking to change my career path and pursue a position as a Full-Stack JavaScript Developer. I have always had a
                    passion for technology and am extremely excited to move in the direction of the tech industry!
                </p> */}

                <img src={korchie4} className="korchie4" />


            </div>

            <div className="edContainer">

                <h2 className="edTitle">
                    Education:
                </h2>

                <dl>
                    <div className="ed">
                        <dt className="gc">Grand Circus</dt>
                        <dt className="gc">Detroit, MI</dt>
                        <dt className="gc">Full-Stack Javascript Bootcamp</dt>
                        <dt className="gc">May 2021 - November 2021</dt>
                    </div>

                    <div className="wsu">

                        {/* <ul> */}
                        <dt className="ed">Wayne State University</dt>
                        <dt className="ed">Detroit, MI</dt>
                        <dt className="ed">Bachelor of Arts, Sociology</dt>
                        <dt className="ed">August 2007 - December 2009</dt>
                        {/* </ul> */}

                    </div>

                    <dd className="projectsTitle">Projects include:</dd>
                    <dd className="projects"><a href="https://what-s-out-there.web.app/">What's Out There?:</a> Uses React and Firebase. Frontend and backend elements. 4 API calls. Designated Dark Park locator.</dd>
                    <dd className="projects"><u>React API Search Engine:</u> Uses TypeScript and React and Ticketmaster API to locate events in a certain zip code.</dd>
                    <dd className="projects"><u>JavaScript Budget App:</u> Use of JavaScript and DOM manipulation to create a budget calculator.</dd>


                    <dd className="skillsTitle">Technical Skills:</dd>

                    <dd className="skills">React</dd>
                    <dd className="skills">TypeScript</dd>
                    <dd className="skills">JavaScript</dd>
                    <dd className="skills">Express & APIs</dd>
                    <dd className="skills">Firebase</dd>
                    <dd className="skills">MongoDB & SQL</dd>
                    <dd className="skills">HTML</dd>
                    <dd className="skills">CSS</dd>
                    <dd className="skills">Git Bash/Terminal</dd>




                    {/* <div className="wsu">

                        <ul>
                            <li className="ed">Wayne State University, Detroit, MI
                                <li className="ed">Bachelor of Arts, Sociology</li>
                                <li className="ed">August 2007 - December 2009</li>
                            </li>
                        </ul>

                    </div> */}




                    {/* <p className="skillsTitle">Technical Skills:</p> */}
                    {/* <div className="skillsTitle">Technical Skills:</div>
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
                </ul> */}

                </dl>

            </div>



            <SocialMedia />


        </div >
    )
}