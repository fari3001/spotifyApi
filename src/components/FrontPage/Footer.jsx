import React from 'react';
import '../Styles/Login.css';
import { Link } from "react-router-dom";
import logo from '../Images/Logo.svg'


export function Footer() {
  return <div>
      <div className='footer-wrapper'>
          <div className='footer-links'>
            <div><img className='footer-logo' src={logo} alt='footer static logo  ' /></div>
            <div className='app-links-wrapper'>
              <div className='footer-list'>
                <p>COMPANY</p>
                <Link className='about' to="www.facebook.com">About</Link>
                <Link className='jobs' to="www.facebook.com">Jobs</Link>
                <Link className='record' to="www.facebook.com">For the Record</Link>
              </div>
              <div className='footer-list'>
                <p>COMMUNITIES</p>
                <Link className='artists' to="www.facebook.com">For Artists</Link>
                <Link className='developers' to="www.facebook.com">Developers</Link>
                <Link className='advertising' to="www.facebook.com">Advertising</Link>
                <Link className='investors' to="www.facebook.com">Investors</Link>
                <Link className='vendors' to="www.facebook.com">Vendors</Link>
              </div>
              <div className='footer-list'>
                <p>USEFUL LINKS</p>
                <Link className='support' to="www.facebook.com">Support</Link>
                <Link className='web-player' to="www.facebook.com">Web Player</Link>
                <Link className='free-mobile-app' to="www.facebook.com">Free Mobile App</Link>
              </div>
            </div>
            <div className='social-links-wrapper'></div>
          </div>
          <div className='legal-links'>
            <Link className='legal' to="www.facebook.com">Legal</Link>
            <Link className='privacy-center' to="www.facebook.com">Privacy Center</Link>
            <Link className='privacy-policy' to="www.facebook.com">Privacy Policy</Link>
            <Link className='cookies' to="www.facebook.com">Cookies</Link>
            <Link className='about-us' to="www.facebook.com">About Us</Link>
          </div>
      </div>
  </div>;
}
