import React from "react";
import {
    BrowserRouter as Router,
    // Switch,
    Route, Link, NavLink
} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="topNav">

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <NavLink to="/aboutme">About Me</NavLink>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        {/* <li>
                            <a href="https://korchiekritters.etsy.com/">Shop KorchieKritters</a>
                        </li> */}
                        <li>
                            <Link to="/rugs">My Rugs</Link>
                        </li>
                        <li>
                            {/* <Link to="/contactme">Contact Me</Link> */}
                            <Link to="/contactme">Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    )
}