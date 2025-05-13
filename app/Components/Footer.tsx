import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg"; // Adjust path as needed

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-50">
      <nav className="flex items-center justify-between py-8 px-20">
        <div>
          <Link to="/">
            <img src={siteLogo} alt="game-logo" />
          </Link>
        </div>

        <div className="flex gap-16 text-lg">
          <Link to="/games" className="hover:text-cyan-300 transition">
            Games
          </Link>
          <Link to="/about" className="hover:text-cyan-300 transition">
            About
          </Link>
          <Link to="/blog" className="hover:text-cyan-300 transition">
            Blog
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
