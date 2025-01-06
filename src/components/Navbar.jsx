import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-name">
          Movie List
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourites" className="nav-link">
          Favourites
        </Link>
        <Link to="/toprated" className="nav-link">
          Top Rated
        </Link>
        <Link to="/upcoming" className="nav-link">
          Upcoming
        </Link>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          fontSize={24}
          onClick={() => setToggleMenu(true)}
          className="hamburger-icon"
        />

        {toggleMenu && (
          <div className="navbar-smallscreen-overlay slide-bottom">
            <FaTimes
              fontSize={24}
              onClick={() => setToggleMenu(false)}
              className="overlay-close"
            />
            <div className="navbar-smallscreen-links">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Home
              </Link>
              <Link
                to="/favourites"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Favourites
              </Link>
              <Link
                to="/toprated"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Top Rated
              </Link>
              <Link
                to="/upcoming"
                className="nav-link"
                onClick={() => setToggleMenu(false)}
              >
                Upcoming
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
