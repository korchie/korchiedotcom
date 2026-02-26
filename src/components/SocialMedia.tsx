import gitHubLogo from "../images/icons/GitHub_Logo_White.png";
import instagramLogo from "../images/icons/instagram.png";
import linkedInLogo from "../images/icons/LI-In-Bug.png";
import tiktok from "../images/icons/tiktok.png";
import github_icon from "../images/icons/github-icon.png";
import instagram_icon from "../images/icons/instagram-icon.png";
import linkedin_icon from "../images/icons/linkedin-icon.png"
import tiktok_icon from "../images/icons/tiktok-icon.png"

export default function socialLinks() {
    return (
        <div className="socialLinks">
            <a href="https://www.linkedin.com/in/skorch/"> <img className="linkedInLogo" alt="LinkedIn" src={linkedin_icon} /> </a>
            <a href="https://github.com/korchie/"> <img className="gitHubLogo" alt="GitHub" src={github_icon} /> </a>
            <a href="https://www.instagram.com/korchie44/"> <img className="instagramLogo" alt="Instagram" src={instagram_icon} /> </a>
            <a href="https://www.tiktok.com/@korchie44"><img className="tikTokLogo" alt="tiktok" src={tiktok_icon} /> </a>
        </div>
    )
}