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
                        <p className="video_li_p ">13k views · 1 months ago</p>
                        <p className="video_li_p ">Food & Drink</p>
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
