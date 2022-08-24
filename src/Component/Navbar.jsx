import React from 'react'
import '../css/myStyle.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbarBox">
          <ul className="order">
            <li className="aboutList orderList ">
              <Link to="/">About Us</Link>
            </li>
            <li className="contactList orderList">
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li className="messageList orderList">
              <Link to="/message">Message</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
