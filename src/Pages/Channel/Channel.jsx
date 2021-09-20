import React from "react";
import "./Channel.scss";

import arrowright from "../../Assets/Images/Rightarrow.png";
import arrowleft from "../../Assets/Images/Leftarrow.png";
import wadov from "../../Assets/Images/wadov.png";
import redline from "../../Assets/Images/redline.png";
import chan1 from "../../Assets/Images/chan1.png";
import chan2 from "../../Assets/Images/chan2.png";
import chan3 from "../../Assets/Images/chan3.png";
import blackarrow from "../../Assets/Images/arrowblack.png";
import chanuser from "../../Assets/Images/chanuser.png";

function Channel() {
  const [datathreechan, setDatathreechan] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((datathreechan) => setDatathreechan(datathreechan.slice(15, 21)));
  }, []);
  return (
    <>
      <section className="home-section chan-section">
        <div className="home-div chan-div">
          <ul className="home_list  chan_list">
            <li className="chan_item"></li>
            <li className="chan_item"></li>

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
                {datathreechan &&
                  datathreechan.map((row) => (
                    <li className="render-li" key={row.id}>
                      <img
                        width={100}
                        height={100}
                        className="home_img"
                        src={row.url}
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
