import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg"; // Adjust path as needed

const Header: React.FC = () => {
  return (
    <header className="bg-gray-950 text-gray-50">
      <nav className="container mx-auto flex items-center justify-between py-8 px-10">
        <div className="h-16 w-16">
          <Link to="/">
            <img src={siteLogo} alt="game-logo" />
          </Link>
        </div>

        <div className="flex gap-16 text-base">
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
    </header>
  );
};

export default Header;
