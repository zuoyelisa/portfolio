import React, { Component } from "react";
import Nav from "./Nav";
import logo from "../assets/Logo.png";
import mail from "../assets/ContactMail.png";
import linkedin from "../assets/ContactLinkedin.png";
import xing from "../assets/ContactXing.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="contact-wrapper">
          <ul>
            <li>
              <a href="mailto:zuoyelisa@gmail.com">
                <img className="contact" src={mail} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/profile/view?id=AAMAABN2FocBZE4iOfkiuZsCLJrXcezvRdp_Kig&trk=hp-identity-name"
                target="_blank"
              >
                <img className="contact" src={linkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.xing.com/profile/Lisha_Dai?sc_o=mxb_p"
                target="_blank"
              >
                <img className="contact" src={xing} />
              </a>
            </li>
          </ul>
        </div>
        <div id="logo">
          <img src={logo} />
        </div>
        <Nav />
      </header>
    );
  }
}

export default Header;
