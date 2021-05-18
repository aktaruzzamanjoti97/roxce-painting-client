import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="col-md-4">
      <h4 className="text-success">{props.menuTitle ? props.menuTitle : ""}</h4>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-white text-decoration-none">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
