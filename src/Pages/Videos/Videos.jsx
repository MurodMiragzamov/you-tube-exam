import React from "react";
import { NavLink } from "react-router-dom";
import "./Videos.scss";

import apelsin from "../../Assets/Images/apelsin.png";
import wadov from "../../Assets/Images/wadov.png";
import share from "../../Assets/Images/share.png";
import likeruka from "../../Assets/Images/likeruka.png";
import more from "../../Assets/Images/Moretochka.png";
import dislike from "../../Assets/Images/dizlike.png";
import autoplay from "../../Assets/Images/autoplay.png";

function Videos() {
  const [datavideo, setDatavideo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((datavideo) => setDatavideo(datavideo.slice(23, 28)));
  }, []);
  return (
    <>
      <section className="video-section">
        <div className="home-div video-div">
          <ul className="home_list video_list">
            <li className="video-item">
              <iframe
                className="video"
                width={100}
                height={100}
                src="https://www.youtube.com/embed/Vx7q7ByxQAc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h2 className="mesto">.</h2>
              <h2 className="video-header">Dude You Re Getting A Telescope</h2>

              <div className="video_div">
                <p className="video-p">123k views</p>

                <ul className="popular-list">
                  <li className="popular-item">
                    <img
                      src={likeruka}
                      alt="like"
                      width={100}
                      height={100}
                      className="popular-like"
                    />
                    <button className="popular-btn">123k</button>
                  </li>
                  <li className="popular-item">
                    <img
                      src={dislike}
                      alt="dislike"
                      width={100}
                      height={100}
                      className="popular-dislike"
                    />
                    <button className="popular-btn">435k</button>
                  </li>
                  <li className="popular-item">
                    <img
                      src={share}
                      alt="share"
                      width={100}
                      height={100}
                      className="popular-share"
                    />
                    <button className="popular-btn">Share</button>
                  </li>
                  <li className="popular-item nonee">
                    <img
                      src={more}
                      alt="more"
                      width={100}
                      height={100}
                      className="popular-more"
                    />
                  </li>
                </ul>
                <span className="span-line"></span>
              </div>

              <div className="video_food">
                <span className="food-span">
                  <img
                    src={apelsin}
                    alt="more"
                    width={100}
                    height={100}
                    className="food-apelsin"
                  />

                  <h4 className="food-header">Food & Drink</h4>

                  <p className="food-p">Published on 14 Jun 2019</p>
                </span>

                <button className="food_btn">Subscribe 2.3m</button>
              </div>

              <p className="video_food_p">
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action. There is no magic formula to write perfect ad
                copy; it is based on a number of factors, including ad
                placement, demographic, even the consumer’s mood when they see
                your ad.
              </p>
              <button className="video_show">Show more</button>
            </li>

            <li className="video-item-videos">
              <ul className="video_li_ul">
                <div className="auto-div">
                  <h2 className="auto-header">Next</h2>
                  <span className="span-auto">
                    <h4>AUYOPLAY</h4>
                    <img
                      width={100}
                      height={100}
                      className="autoplay"
                      src={autoplay}
                      alt="icon"
                    />
                  </span>
                </div>
                {datavideo &&
                  datavideo.map((row) => (
                    <li className="render-li" key={row.id}>
                      <NavLink to="/videos">
                        <img
                          width={100}
                          height={100}
                          className="video_img"
                          src={row.thumbnailUrl}
                          alt="icon"
                        />
                        <img
                          width={100}
                          height={100}
                          src={wadov}
                          alt="icon"
                          className="wadov-video"
                        />
                        <span className="render-span-video">4:28</span>
                      </NavLink>
                      <h4 className="video_li_header">{row.title}</h4>
                      <span className="span-p">
                        <p className="video_li_p ">123k views</p>
                        <p className="video_li_p ">Dollie Blair</p>
                      </span>
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

export default Videos;
