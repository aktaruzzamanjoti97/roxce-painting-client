import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "../FooterCol/FooterCol";
import logo from "../../../images/palette.png";

const Footer = () => {
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const oralHealth = [
    { name: "Residential Interior", link: "/emergency" },
    { name: "Commercial Interior", link: "/checkup" },
    { name: "Industrial Interior", link: "/personal-treatment" },
    { name: "Rooftop", link: "/tooth-extract" },
    { name: "Ground Floor", link: "/checkup" },
    { name: "Exterior Painting", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
  ];
  const services = [
    { name: "Managing Director", link: "/emergency" },
    { name: "Business Manager", link: "/checkup" },
    { name: "Civil Engineer", link: "/personal-treatment" },
    { name: "Mechanical Engineer", link: "/tooth-extract" },
    { name: "Painting Ambassador ", link: "/checkup" },
    { name: "Product Instructor", link: "/checkup" },
    { name: "Community Manager", link: "/checkup" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <div className="col-md-3">
            <img className="w-50 my-2" src={logo} alt="" />
            <h3 className="text-white  my-2">About Roxce</h3>
            <h5 className="text-warning  my-3">Painting Service Company</h5>
          </div>
          <div className="col-md-9">
            <div className="row">
              <FooterCol key={2} menuTitle="Work Positions" menuItems={services} />
              <FooterCol
                key={3}
                menuTitle="Our Services"
                menuItems={oralHealth}
              />
              <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                <ul className="social-media list-inline">
                  <li className="list-inline-item">
                    <a href="//facebook.com">
                      <FontAwesomeIcon
                        className="icon active-icon"
                        icon={faFacebookF}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="//google.com">
                      <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="//instagram.com">
                      <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </a>
                  </li>
                </ul>
                <div className="mt-5">
                  <h6 className="text-white">Call Now</h6>
                  <button
                    style={{ backgroundColor: "#12D0DC", color: "white" }}
                    className="btn"
                  >
                    +2025550295
                  </button>
                </div>
              </FooterCol>
            </div>
          </div>
          {/* <FooterCol key={1} menuTitle={"About Roxce"} menuItems={noNamed}/> */}
        </div>
        <div className="copyRight text-center">
          <p>CopyRight {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
