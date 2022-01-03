import React, { useState } from "react";
import PropTypes from "prop-types";
import { toggleTheme, currentTheme } from "../App";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [theme, setTheme] = useState(currentTheme);
  const toggle = (e) => {
    e.target.checked = theme === "light" ? true : false;
    toggleTheme();
    setTheme(currentTheme);
    props.showAlert("success", `Theme changed to ${currentTheme}`);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
      <div className="form-check form-switch ms-auto">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={toggle}
          checked={currentTheme === "light" ? false : true}
        />
        <label
          className={`form-check-label text-${
            theme === "dark" ? "light" : "dark"
          }`}
          htmlFor="flexSwitchCheckDefault"
        >
          Switch {theme}
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: "EnterTitle" };
