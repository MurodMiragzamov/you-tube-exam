import React from "react";
import { NavLink } from "react-router-dom";
import "./Sub.scss";

import user1 from "../../Assets/Images/user1.png";
import user2 from "../../Assets/Images/user2.png";
import user3 from "../../Assets/Images/user3.png";
import user4 from "../../Assets/Images/user4.png";
import user5 from "../../Assets/Images/user5.png";
import user6 from "../../Assets/Images/user6.png";

function Sub() {
  return (
    <>
      <ul className="sub-list">
        <li className="sub_item">
          <NavLink to="/channel">
            <img
              width={100}
              height={100}
              src={user1}
              alt="logo"
              className="userlogo"
            />
            <p className="nav_p">Gussie Singleton</p>
          </NavLink>
        </li>

        <li className="sub_item">
          <NavLink to="/channel">
            <img
              width={100}
              height={100}
              src={user2}
              alt="logo"
              className="userlogo"
            />
            <p className="nav_p">Nora Francis</p>
          </NavLink>
        </li>

        <li className="sub_item">
          <NavLink to="/channel">
            <img
              width={100}
              height={100}
              src={user3}
              alt="logo"
              className="userlogo"
            />
            <p className="nav_p">Belle Briggs</p>
          </NavLink>
        </li>

        <li className="sub_item">
          <NavLink to="/channel">
            <img
              width={100}
              height={100}
              src={user4}
              alt="logo"
              className="userlogo"
            />
            <p className="nav_p">Eunice Cortez</p>
          </NavLink>
        </li>

        <li className="sub_item">
          <NavLink to="/channel">
            <img
              width={100}
              height={100}
              src={user5}
              alt="logo"
              className="userlogo"
            />
            <p className="nav_p">Emma Hanson</p>
          </NavLink>
        </li>

        <li className="sub_item">
          <NavLink to="/channel">
            <img
              width={100}
              height={100}
              src={user6}
              alt="logo"
              className="userlogo"
            />
            <p className="nav_p">Leah Berry</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Sub;
