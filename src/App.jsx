import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Trending from "./Pages/DeadPages/Trending/Trending";
import Sub from "./Pages/Sub/Sub";
import Lib from "./Pages/DeadPages/Lib/Lib";
import His from "./Pages/DeadPages/His/His";
import Watch from "./Pages/DeadPages/Watch/Watch";
import Fav from "./Pages/DeadPages/Fav/Fav";
import Like from "./Pages/DeadPages/Like/Like";
import Music from "./Pages/DeadPages/Music/Music";
import Games from "./Pages/DeadPages/Games/Games";
import Setting from "./Pages/DeadPages/Setting/Setting";
import Channel from "./Pages/Channel/Channel";
//images

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

import user1 from "./Assets/Images/user1.png";
import user2 from "./Assets/Images/user2.png";
import user3 from "./Assets/Images/user3.png";
import user4 from "./Assets/Images/user4.png";
import user5 from "./Assets/Images/user5.png";
import user6 from "./Assets/Images/user6.png";

import settings from "./Assets/Images/settings.png";

import Search from "./Components/Search/Search";

function App() {
  return (
    <>
      <div className="container">
        <div className="div">
          <div className="nav-div">
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
                  <p className="nav_p red">Home</p>
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
                  <p className="nav_p">Trending</p>
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
                  <p className="nav_p">Subscriptions</p>
                </NavLink>
              </li>
            </ul>

            <ul className="nav_lib-list">
              <li className="lib-item">
                <NavLink to="/librery">
                  <img
                    width={100}
                    height={100}
                    src={file}
                    alt="logo"
                    className="filelogo"
                  />
                  <p className="nav_p">Library</p>
                </NavLink>
              </li>

              <li className="lib-item">
                <NavLink to="/history">
                  <img
                    width={100}
                    height={100}
                    src={history}
                    alt="logo"
                    className="historylogo"
                  />
                  <p className="nav_p">History</p>
                </NavLink>
              </li>

              <li className="lib-item">
                <NavLink to="/watchlater">
                  <img
                    width={100}
                    height={100}
                    src={watch}
                    alt="logo"
                    className="watchlogo"
                  />
                  <p className="nav_p">Watch later</p>
                </NavLink>
              </li>

              <li className="lib-item">
                <NavLink to="/favourite">
                  <img
                    width={100}
                    height={100}
                    src={star}
                    alt="logo"
                    className="starlogo"
                  />
                  <p className="nav_p">Favourite</p>
                </NavLink>
              </li>

              <li className="lib-item">
                <NavLink to="/likevideos">
                  <img
                    width={100}
                    height={100}
                    src={like}
                    alt="logo"
                    className="likelogo"
                  />
                  <p className="nav_p">Liked videos</p>
                </NavLink>
              </li>

              <li className="lib-item">
                <NavLink to="/music">
                  <img
                    width={100}
                    height={100}
                    src={music}
                    alt="logo"
                    className="musiclogo"
                  />
                  <p className="nav_p">Music</p>
                </NavLink>
              </li>

              <li className="lib-item">
                <NavLink to="/games">
                  <img
                    width={100}
                    height={100}
                    src={game}
                    alt="logo"
                    className="gamelogo"
                  />
                  <p className="nav_p">Games</p>
                </NavLink>
              </li>

              <li className="lib-item show">
                <img
                  width={100}
                  height={100}
                  src={arrow}
                  alt="logo"
                  className="arrowlogo"
                />
                <p className="nav_p">Show more</p>
              </li>
            </ul>

            <h3 className="nav-header">Subscriptions</h3>

            <ul className="nav_sub-list">
              <li className="sub-item">
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

              <li className="sub-item">
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

              <li className="sub-item">
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

              <li className="sub-item">
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

              <li className="sub-item">
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

              <li className="sub-item">
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

            <span className="settings-span">
              <NavLink to="/setting">
                <img
                  width={100}
                  height={100}
                  src={settings}
                  alt="logo"
                  className="settinglogo"
                />
                <p className="nav_p">Setting</p>
              </NavLink>
            </span>
          </div>
        </div>

        <Search></Search>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/trending" component={Trending} exact />
          <Route path="/subscriptions" component={Sub} exact />
          <Route path="/channel" component={Channel} exact />
          <Route path="/librery" component={Lib} exact />
          <Route path="/history" component={His} exact />
          <Route path="/watchlater" component={Watch} exact />
          <Route path="/favourite" component={Fav} exact />
          <Route path="/likevideos" component={Like} exact />
          <Route path="/music" component={Music} exact />
          <Route path="/games" component={Games} exact />
          <Route path="/setting" component={Setting} exact />
        </Switch>
      </div>
    </>
  );
}

export default App;
