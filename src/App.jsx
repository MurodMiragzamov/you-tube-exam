import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Trending from "./Pages/Trending/Trending";
//images
import youtube from "./Assets/Images/youtube.png";
import menu from "./Assets/Images/menu.png";

import home from "./Assets/Images/redhome.png";
import ogon from "./Assets/Images/ogon.png";
import sub from "./Assets/Images/sub.png";

import file from "./Assets/Images/file.png";
import history from "./Assets/Images/history.png";
import watch from "./Assets/Images/watch.png";
import star from "./Assets/Images/star.png";
import like from "./Assets/Images/like.png";
import music from "./Assets/Images/music.png";
import game from "./Assets/Images/game.png";
import arrow from "./Assets/Images/arrow.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="nav-div">
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
          <ul className="nav_home-list">
            <li className="home-item">
              <NavLink to="/">
                <img
                  width={100}
                  height={100}
                  src={home}
                  alt="logo"
                  className="homelogo"
                />
                <p className="home_p red">Home</p>
              </NavLink>
            </li>
            <li className="home-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Trending</p>
              </NavLink>
            </li>
            <li className="home-item">
              <NavLink to="/subscriptions">
                <img
                  width={100}
                  height={100}
                  src={sub}
                  alt="logo"
                  className="sublogo"
                />
                <p className="home_p">Subscriptions</p>
              </NavLink>
            </li>
          </ul>

          <ul className="nav_lib-list">
            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Library</p>
              </NavLink>
            </li>

            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">History</p>
              </NavLink>
            </li>

            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Watch later</p>
              </NavLink>
            </li>

            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Favourite</p>
              </NavLink>
            </li>

            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Liked videos</p>
              </NavLink>
            </li>

            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Music</p>
              </NavLink>
            </li>

            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Games</p>
              </NavLink>
            </li>

            <li className="lib-item">
              <NavLink to="/trending">
                <img
                  width={100}
                  height={100}
                  src={ogon}
                  alt="logo"
                  className="ogonlogo"
                />
                <p className="home_p">Trending</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/trending" component={Trending} />
        </Switch>
      </div>
    </>
  );
}

export default App;
