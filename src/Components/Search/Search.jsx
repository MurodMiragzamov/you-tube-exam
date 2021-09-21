import React from "react";
import { NavLink } from "react-router-dom";
import "./Search.scss";
import search from "../../Assets/Images/search.png";
import Video from "../../Assets/Images/videoicon.png";
import Tochki from "../../Assets/Images/tochki.png";
import Colocol from "../../Assets/Images/colocol.png";
import Profile from "../../Assets/Images/myprofile.png";
import Redicon from "../../Assets/Images/redoval.png";
import youtube from "../../Assets/Images/youtube.png";
import menu from "../../Assets/Images/menu.png";

function Search() {
  return (
    <>
      <div className="search-div">
        <span className="nav-logo-span">
          <img
            width={100}
            height={100}
            src={menu}
            alt="logo"
            className="menulogo"
          />
          <img
            width={100}
            height={100}
            src={youtube}
            alt="logo"
            className="youtubelogo"
          />
        </span>
        <div className="imput-div">
          <input
            autoComplete="off"
            type="text"
            name="input"
            placeholder="Search"
            className="input"
          />

          <img
            width={100}
            height={100}
            src={search}
            alt="icon"
            className="inputicon"
          />
        </div>

        <ul className="search-list">
          <li className="search-item">
            <img
              width={100}
              height={100}
              src={Video}
              alt="icon"
              className="videoicon"
            />
          </li>

          <li className="search-item">
            <img
              width={100}
              height={100}
              src={Tochki}
              alt="icon"
              className="tochkiicon"
            />
          </li>

          <li className="search-item">
            <img
              width={100}
              height={100}
              src={Colocol}
              alt="icon"
              className="colocolicon"
            />
            <img
              width={100}
              height={100}
              src={Redicon}
              alt="icon"
              className="redicon"
            />
            <span>3</span>
          </li>

          <li className="search-item">
            <NavLink to="/channel">
              <img
                width={100}
                height={100}
                src={Profile}
                alt="icon"
                className="profileicon"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Search;
