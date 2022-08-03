import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import logo from "./logo.png";

export const Navbar = () => {
  const [navBarToggled, setNavBarToggled] = useState(false);

  const toggleNavbar = () => {
    setNavBarToggled((prevState) => {
      return !prevState;
    });
  };
  return (
    <header className={classes.header}>
      {/* <!-- LOGO --> */}
      <div className={classes["brand-logo"]}>
        <Link to="/" className={classes["brand-link"]}>
          <img
            src={logo}
            alt="Town Panchayath Virajpet Logo"
            className={classes["brand-img"]}
          />
          tp virajpet
        </Link>
      </div>
      <nav
        className={
          navBarToggled
            ? `${classes["main-nav"]} ${classes["toggle-nav"]}`
            : classes["main-nav"]
        }
      >
        <ul className={classes["nav-list"]}>
          <li className={classes["nav-list__item"]}>
            <Link className={classes["nav-link"]} to="/dcb">
              DCB
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className={classes["nav-link"]} to="/">
              Work Schemes
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className={classes["nav-link"]} to="/">
              SCSP-TSP
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className={classes["nav-link"]} to="/">
              Housing
            </Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link className={classes["nav-link"]} to="/">
              Miscellaneous
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={
          navBarToggled
            ? `${classes["nav-toggle"]} ${classes["toggle-ham"]}`
            : classes["nav-toggle"]
        }
        onClick={toggleNavbar}
      >
        <div className={classes["hamburger"]}></div>
      </div>
    </header>
  );
};
