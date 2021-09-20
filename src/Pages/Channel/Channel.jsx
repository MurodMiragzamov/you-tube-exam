import React from "react";
import "./Channel.scss";
import { NavLink } from "react-router-dom";

import arrowright from "../../Assets/Images/Rightarrow.png";
import arrowleft from "../../Assets/Images/Leftarrow.png";
import wadov from "../../Assets/Images/wadov.png";
import redline from "../../Assets/Images/redline.png";
import chan1 from "../../Assets/Images/chan1.png";
import chan2 from "../../Assets/Images/chan2.png";
import chan3 from "../../Assets/Images/chan3.png";
import blackarrow from "../../Assets/Images/arrowblack.png";
import chanuser from "../../Assets/Images/chanuser.png";
import colocolchan from "../../Assets/Images/colocol.png";
import green from "../../Assets/Images/green.png";
import blue from "../../Assets/Images/blue.png";
import chansearch from "../../Assets/Images/search.png";

function Channel() {
  const [datachan, setDatachan] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((datachan) => setDatachan(datachan.slice(17, 23)));
  }, []);
  return (
    <>
      <section className="home-section chan-section">
        <div className="home-div chan-div">
          <ul className="home_list  chan_list">
            <li className="chan_item">
              <div className="chan_li_div">
                <img src={green} alt="green" className="chan_big-img" />

                <ul className="chan_user-list">
                  <li className="chan_user-item">
                    <img
                      width={100}
                      height={100}
                      src={chanuser}
                      alt="user"
                      className="chan_user-img"
                    />

                    <h4 className="chan_user-header">Margaret Phelps</h4>
                    <p className="chan_user-p">245K subscribed</p>
                  </li>
                  <li className="chan_user-item">
                    <img
                      width={100}
                      height={100}
                      src={colocolchan}
                      alt="colocol"
                      className="chan_colocol"
                    />
                    <button className="chan_btn">Subscribe 2.3m</button>
                  </li>
                </ul>

                <ul className="chan_nav-list">
                  <li className="chan_nav-item">
                    <NavLink to="/">
                      <p className="chan_nav-p red">Home</p>
                      <img
                        src={redline}
                        alt="line"
                        width={100}
                        height={100}
                        className="red-line"
                      />
                    </NavLink>
                  </li>
                  <li className="chan_nav-item">
                    <NavLink to="/likevideos">
                      <p className="chan_nav-p">Videos</p>
                    </NavLink>
                  </li>
                  <li className="chan_nav-item">
                    <NavLink to="/games">
                      <p className="chan_nav-p">Playlists</p>
                    </NavLink>
                  </li>
                  <li className="chan_nav-item">
                    <NavLink to="/subscriptions">
                      <p className="chan_nav-p">Channels</p>
                    </NavLink>
                  </li>
                  <li className="chan_nav-item">
                    <NavLink to="/">
                      <p className="chan_nav-p">Discussion</p>
                    </NavLink>
                  </li>
                  <li className="chan_nav-item">
                    <NavLink to="/">
                      <p className="chan_nav-p">About</p>
                    </NavLink>
                  </li>
                  <li className="chan_nav-item sear">
                    <img
                      width={100}
                      height={100}
                      src={chansearch}
                      alt="search"
                      className="chan_search"
                    />
                  </li>
                </ul>
              </div>
            </li>

            <li className="chan_item">
              <div className="chan_blue-div">
                <ul className="blue-list">
                  <li className="blue-item">
                    <img
                      width={100}
                      height={100}
                      src={blue}
                      alt="search"
                      className="chan_blue"
                    />
                    <img
                      width={100}
                      height={100}
                      src={wadov}
                      alt="search"
                      className="chan_wadov"
                    />
                    <span className="chan_span">7:36</span>
                  </li>
                  <li className="blue-item">
                    <h2 className="chan_blue-header">
                      Choosing The Best Audio Player Software For Your Computer
                    </h2>
                    <p className="chan_blue-p">
                      Your cheap internet-based banner advertising will become
                      one of the sought for ads there are. Today, the world of
                      Internet advertising is rapidly evolving beyond banner ads
                      and intrusive pop-ups. Bayles A common medium for
                      advertising on the Internet is the use of banner ads.{" "}
                    </p>
                    <p className="home_li_pp ">11k views · 6 months ago</p>
                  </li>
                </ul>

                <ul className="chan_users-list">
                  <li className="users-item">
                    <p className="blue_rec-p">Recommended channel</p>
                    <img
                      width={100}
                      height={100}
                      src={chan1}
                      alt="user"
                      className="chan_users"
                    />
                    <h4 className="users_header">Flora Benson</h4>
                  </li>
                  <li className="users-item">
                    <img
                      width={100}
                      height={100}
                      src={chan2}
                      alt="user"
                      className="chan_users"
                    />
                    <h4 className="users_header">Violet Cobb</h4>
                  </li>
                  <li className="users-item">
                    <img
                      width={100}
                      height={100}
                      src={chan3}
                      alt="user"
                      className="chan_users"
                    />
                    <h4 className="users_header">Phillip Mullins</h4>
                  </li>
                </ul>
              </div>
            </li>

            <li className="home_item">
              <div className="home_divv">
                <h3 className="home_header chan_header">
                  Margaret Phelps videos
                </h3>

                <button className="btn-l">
                  <img
                    width={100}
                    height={100}
                    src={arrowleft}
                    alt="icon"
                    className="larrow"
                  />
                </button>

                <button className="btn-r">
                  <img
                    width={100}
                    height={100}
                    src={arrowright}
                    alt="icon"
                    className="rarrow"
                  />
                </button>
              </div>

              <ul className="home_li_ul pp">
                {datachan &&
                  datachan.map((row) => (
                    <li className="render-li" key={row.id}>
                      <img
                        width={100}
                        height={100}
                        className="home_img"
                        src={row.thumbnailUrl}
                        alt="icon"
                      />
                      <img
                        width={100}
                        height={100}
                        src={wadov}
                        alt="icon"
                        className="wadov"
                      />
                      <span className="render-span">4:28</span>
                      <h4 className="home_li_header">{row.title}</h4>
                      <p className="home_li_pp ">13k views · 1 months ago</p>
                      <p className="home_li_pp ">Food & Drink</p>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Channel;
