import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
//img
import user1 from "../../Assets/Images/user11.png";
import arrowright from "../../Assets/Images/Rightarrow.png";
import arrowleft from "../../Assets/Images/Leftarrow.png";
import apelsin from "../../Assets/Images/apelsin.png";

function Home() {
  const [data, setData] = React.useState([]);
  const [datatwo, setDatatwo] = React.useState([]);
  const [datathree, setDatathree] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 6)));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((datatwo) => setDatatwo(datatwo.slice(6, 10)));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((datathree) => setDatathree(datathree.slice(10, 15)));
  }, []);

  return (
    <>
      <section className="home-section">
        <div className="home-div">
          <ul className="home_list">
            <li className="home_item">
              <NavLink to="/games">
                <img
                  width={100}
                  height={100}
                  src={user1}
                  alt="logo"
                  className="userlogohome"
                />
                <h3 className="home_header">Dollie Blair</h3>
              </NavLink>

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
              <ul className="home_li_ul">
                {data &&
                  data.map((row) => (
                    <li key={row.id}>
                      <img className="home_img" src={row.url} alt="icon" />
                    </li>
                  ))}
              </ul>
            </li>
            <li className="home_item">
              <h3 className="home_header rec-header">Recommended</h3>

              <ul className="home_li_ul">
                {datatwo &&
                  datatwo.map((row) => (
                    <li key={row.id}>
                      <img className="home_img-two" src={row.url} alt="icon" />
                    </li>
                  ))}
              </ul>
            </li>
            <li className="home_item">
              <div className="home_divv">
                <NavLink to="/games">
                  <img
                    width={100}
                    height={100}
                    src={apelsin}
                    alt="logo"
                    className="userlogohome"
                  />
                  <h3 className="home_header">Food & Drink</h3>
                </NavLink>
                <p className="home_p">Recommended channel for you</p>
              </div>

              <ul className="home_li_ul">
                {datathree &&
                  datathree.map((row) => (
                    <li key={row.id}>
                      <img className="home_img" src={row.url} alt="icon" />
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

export default Home;
