import gitHubLogo from "../images/icons/GitHub_Logo_White.png";
import instagramLogo from "../images/icons/instagram.png";
import linkedInLogo from "../images/icons/LI-In-Bug.png";
import tiktok from "../images/icons/tiktok.png";

export default function () {
    return (
        <div className="socialLinks">
            <a href="https://www.linkedin.com/in/skorch/"> <img className="linkedInLogo" alt="LinkedIn" src={linkedInLogo} /> </a>
            <a href="https://github.com/korchie/"> <img className="gitHubLogo" alt="GitHub" src={gitHubLogo} /> </a>
            <a href="https://www.instagram.com/korchie44/"> <img className="instagramLogo" alt="Instagram" src={instagramLogo} /> </a>
            <a href="https://www.tiktok.com/@korchie44"><img className="tikTokLogo" alt="tiktok" src={tiktok} /> </a>
        </div>
    )
}