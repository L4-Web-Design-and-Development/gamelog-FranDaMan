import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg";
import facebook from "~/assets/svg/facebook.svg";
import twitter from "~/assets/svg/twitter.svg";
import instagram from "~/assets/svg/Vector.svg";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-50">
      <nav className="container flex-col mx-auto flex items-center  lg:flex-row justify-center lg:items-center lg:justify-between py-8 px-10">
        <div className=" flex flex-col gap-10 justify-start items-center">
          <Link to="/">
            <img src={siteLogo} className="h-20 w-20 " alt="game-logo" />
          </Link>
          <div className="flex flex-row gap-32 lg:gap-9 bottom-3">
            <img src={facebook} alt="facebooklogo" />
            <img src={twitter} alt="twitterlogo" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>

        <div className="lg:flex hidden  lg:gap-20 text-base pr-5">
          <div className="text-slate-200">
            Site
            <div className="text-gray-500">
              <div>Games</div>
              <div>About</div>
              <div>Blog</div>
            </div>
          </div>

          <div>
            Support
            <div className="text-gray-500">
              <div>Legal</div>
              <div>Contact Us</div>
              <div>Privacy Policy</div>
            </div>
          </div>

          <div>
            Follow Us
            <div className="text-gray-500">
              <div>Facebook</div>
              <div>Twitter</div>
              <div>Instagram</div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
