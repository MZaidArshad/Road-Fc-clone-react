import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer container-fluid text-center">
      <div className="container">
        <div className="col-12 pt-4">
          <img src="./images/logo.png" alt="Logo" />
        </div>
        <div className="mt-3">
          <ul className="footer__nav d-flex">
            <Link className="Fnav-link" to="/">
              <li className="footer__nav__item">Home</li>
            </Link>
            <Link className="Fnav-link" to="/#about">
              <li className="footer__nav__item">TOKENOMICS</li>
            </Link>
            <Link className="Fnav-link" to="/#token">
              <li className="footer__nav__item">ECOSYSTEM</li>
            </Link>
            <Link className="Fnav-link" to="/MyNFTs">
              <li className="footer__nav__item">NFTs CARD</li>
            </Link>
            <Link className="Fnav-link" to="/MyNFTs#nft">
              <li className="footer__nav__item">GAME</li>
            </Link>
            <Link className="Fnav-link" to="/">
              <li className="footer__nav__item">ROAD POOL</li>
            </Link>
            <Link className="Fnav-link" to="/#roadmap">
              <li className="footer__nav__item">ROAD MAP</li>
            </Link>
            <Link className="Fnav-link" to="/presale">
              <li className="footer__nav__item">AUDIT</li>
            </Link>
          </ul>
        </div>
        <div className="footer__social-links mt-3">
          <a href="/">
            <SendIcon className="footer__socialIcon" />
          </a>
          <a href="/">
            <TwitterIcon className="footer__socialIcon" />
          </a>
          <a href="/">
            <GitHubIcon className="footer__socialIcon" />
          </a>
          <a href="/">
            <YouTubeIcon className="footer__socialIcon" />
          </a>
          <a href="/">
            <EmailIcon className="footer__socialIcon" />
          </a>
          <a href="/">
            <FacebookIcon className="footer__socialIcon" />
          </a>
        </div>
        <div className="col-md-12 text-center pt-3">
          <p className="footer__email">deepthoughts195@gmail.com</p>
        </div>
        <div className="col-md-12 text-center p-2">
          <p className="footer__copyright">
            &copy; Copyright 2022 RoadFC. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
