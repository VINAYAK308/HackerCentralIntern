import "./Navbar.css"
import logo from "../assets/kevinRushLogo.png"
const Navbar = () => {
    return <nav className="bg-purple-400 mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2" src={logo} alt="logo" />
        </div>
        <div className="social">
                    <a id="linkedin" href="https://www.linkedin.com/in/vinayak-jadhav-5743a4289/"><img src="/linkedin.png" alt=""/> </a>
                    <a href="https://www.instagram.com/_vinayak_308/?hl=en"><img src="/instagram.png" alt=""/> </a>
                    <a href="https://github.com/VINAYAK308"><img src="/github.png" alt=""/> </a>
                    <a href="https://x.com/_vinayak_308"><img src="/twitter.avif" alt=""/> </a>
        </div>

    </nav>
};

export default Navbar;