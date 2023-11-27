import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="container-fluid navv"
              style={{ background: "rgb(11, 188, 243, 0.1)" }}
            >
              <NavLink
                style={{ fontWeight: "700", color: "#0bbcf3" }}
                className="navbar-brand"
                to="/"
                onClick={closeNav}
              >
                Gaming Zone
              </NavLink>
              <button
                className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation"
                onClick={toggleNav}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isNavOpen ? "show" : ""
                }`}
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav mx-auto mb-2 mb-lg-0`}>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                      onClick={closeNav}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      to="/about"
                      onClick={closeNav}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      to="/services"
                      onClick={closeNav}
                    >
                      Games
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      to="https://discord.com/"
                      onClick={closeNav}
                    >
                      Discord
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      onClick={closeNav}
                    >
                      <a href="mailto:OurTeam"> Help?</a>
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <h4 className="mt-1">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link active"
                        to="/login"
                        onClick={closeNav}
                      >
                        Login/Register
                      </NavLink>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
