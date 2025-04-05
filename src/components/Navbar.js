import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Header with Sacred Text, Logo, and Title */}
      <div className="bg-light py-4 border-bottom text-center">
        {/* Sacred Text Above */}
        <div className="mb-2">
          <h5 className="text-muted fw-bold mb-1" style={{ fontSize: "18px" }}>
            || श्री गुरुभ्यो नमः ||
          </h5>
          <h5 className="text-muted fw-bold" style={{ fontSize: "18px" }}>
            || ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ ||
          </h5>
        </div>

        {/* Centered Logo */}
        <div>
          <img
            src="/rayaru.png"
            alt="Rayaru Logo"
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid white",
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* Temple Name and Subtitle */}
        <div className="mt-3">
          <h4
            className="fw-bold text-primary"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            Sri Raghavendra Swamy Mutt, Hungund
          </h4>
          <p className="text-muted small">
            A sacred destination of devotion, faith, and miracles.
          </p>
          <h4
            className="fw-bold text-primary mt-3"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಮಠ, ಹುನಗುಂದ
          </h4>
          <p className="text-muted small">
            ಭಕ್ತಿ, ನಂಬಿಕೆ ಮತ್ತು ಅದೇಶಗಳ ಪವಿತ್ರ ಸ್ಥಳ.
          </p>
        </div>
      </div>
<div className="bg-dark text-white text-center py-1 small">
            OFFICE NUMBER: <strong>+91-08512-279459/28</strong>
          </div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Mobile toggle */}
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
          </button>{" "}
          {/* Top Bar with Contact Info */}
          
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left side links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sevas
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/daily-seva">
                      Daily Seva
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/monthly-seva">
                      Monthly Seva
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/other-seva">
                      Other Seva
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/photos">
                  Photos
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/donations">
                 Donations
                </Link>
              </li>
            </ul>

            {/* Right side search & buttons */}
            <div className="d-flex align-items-center">
              <input
                className="form-control form-control-sm me-2 w-auto"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success btn-sm me-2"
                type="submit"
              >
                Search
              </button>
              <Link className="btn btn-primary btn-sm me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary btn-sm" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
