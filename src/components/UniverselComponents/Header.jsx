import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Header({ active }) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <span className="navbar-brand">
            <img src="./images/logo.png" alt="logo" />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${active === 1 ? "active" : ""}`}>
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${active === 2 ? "active" : ""}`}>
                <Link className="nav-link" to="/#about">
                  Tokenomics
                </Link>
              </li>
              <li className={`nav-item ${active === 3 ? "active" : ""}`}>
                <Link className="nav-link" to="/#token">
                  Ecosystem
                </Link>
              </li>
              <li className={`nav-item ${active === 4 ? "active" : ""}`}>
                <Link className="nav-link" to="/MyNFTs">
                  NFts Card
                </Link>
              </li>
              <li className={`nav-item ${active === 5 ? "active" : ""}`}>
                <Link className="nav-link" to="/MyNFTs#nft">
                  Game
                </Link>
              </li>
              <li className={`nav-item ${active === 6 ? "active" : ""}`}>
                <Link className="nav-link" to="/">
                  Road Pool
                </Link>
              </li>
              <li className={`nav-item ${active === 7 ? "active" : ""}`}>
                <Link className="nav-link" to="/#roadmap">
                  Road Map
                </Link>
              </li>
              <li className={`nav-item ${active === 8 ? "active" : ""}`}>
                <Link className="nav-link" to="/presale">
                  Presale
                </Link>
              </li>
            </ul>
            <div className="social-icons">
              <SendIcon className="icon" />
              <TwitterIcon className="icon" />
              <GitHubIcon className="icon" />
              <YouTubeIcon className="icon" />
            </div>
          </div>
        </div>
      </nav>
      <div className="nav__bottom_box p-3 w-100"></div>
    </div>
  );
}

export default Header;
