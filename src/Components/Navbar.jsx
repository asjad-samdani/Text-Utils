import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ title = "TextUtils", mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                toggleMode("primary");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                toggleMode("danger");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                toggleMode("success");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                toggleMode("warning");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-info rounded mx-2"
              onClick={() => {
                toggleMode("info");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>{" "}
            <div
              className="bg-secondary rounded mx-2"
              onClick={() => {
                toggleMode("secondary");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
          </div>

          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input t"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
            >
              switch
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  tittle: propTypes.string,
  mode: propTypes.string.isRequired,
  toggleMode: propTypes.func.isRequired,
};
