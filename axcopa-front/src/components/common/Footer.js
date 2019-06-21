import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer role="contentinfo" itemScope="" itemType="http://schema.org/WPFooter">
    <div className="content">
      <div className="uk-container uk-container-center">
        <div className="uk-grid" data-uk-grid-margin="">
          <div className="uk-width-medium-1-3 uk-width-large-2-5 uk-hidden-small">
            <span className="uk-text-normal uk-text-uppercase">About</span>
            <p className="uk-text-normal">
              HDwallpapers.net is a place to find the best wallpapers and HD
              backgrounds for your computer desktop (Windows, Mac or Linux),
              iPhone, iPad or Android devices. We make it easy to discover,
              share and download High Definition wallpapers.
            </p>
          </div>
          <div className="uk-width-medium-1-3 uk-width-large-1-5 uk-hidden-small">
            <span className="uk-text-normal uk-text-uppercase">Legal</span>
            <ul className="uk-list uk-list-space uk-text-normal">
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/copyright">Copyright Policy</a>
              </li>
            </ul>
          </div>
          <div className="uk-width-medium-1-3 uk-width-large-1-5 uk-hidden-small">
            <span className="uk-text-normal uk-text-uppercase">
              Get In Touch
            </span>
            <ul className="uk-list uk-list-space uk-text-normal">
              <li>
                <a
                  href="https://www.facebook.com/www.hdwallpapers.net"
                  rel="me nofollow"
                >
                  <i className="uk-icon-facebook-square uk-h5" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/HDwallpapersnet" rel="me nofollow">
                  <i className="uk-icon-twitter uk-h5" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/hdwallpapers/"
                  rel="me nofollow"
                >
                  <i className="uk-icon-pinterest uk-h5" /> Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div className="uk-width-medium-1-1 uk-width-large-1-5 uk-width-small-1-1 uk-text-center">
            <p className="uk-h1 uk-margin-top uk-text-normal">1,422,874</p>
            <span className="uk-text-uppercase uk-margin-remove">
              DOWNLOADS
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="copyright">
      <div className="uk-container uk-container-center">
        <div className="uk-grid">
          <div className="uk-width-medium-1-2 uk-width-large-4-5 uk-width-small-1-1 uk-text-small uk-text-center-small">
            <p>
              ©2007-2019 HDwallpapers.net - All images are copyright to their
              respective owners.
            </p>
          </div>
          <div className="uk-width-medium-1-2 uk-width-large-1-5 uk-width-small-1-1 uk-text-small uk-text-right uk-text-center-small">
            <a href="/contact">
              <i className="uk-icon-send" /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="cookiebar" className="uk-animation-slide-top uk-hidden">
      <div className="uk-container uk-container-center">
        <div className="uk-grid">
          <div className="uk-width-9-10">
            <p className="cookiebar-txt">
              This website uses cookies to better serve you and provide a more
              user friendly experience.
              <a className="cookiebar-link" href="/privacy">
                More info
              </a>
            </p>
          </div>
          <a
            id="cookiebar-close"
            className="uk-width-1-10 uk-text-center"
            href="#"
          >
            <span className="uk-visible-large">Got it!</span>
            <span className="uk-hidden-large">OK</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
