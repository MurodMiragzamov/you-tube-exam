import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
//img
import user1 from "../../Assets/Images/user11.png";
import arrowright from "../../Assets/Images/Rightarrow.png";
import arrowleft from "../../Assets/Images/Leftarrow.png";

function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 6)));
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
              <ul>
                {data &&
                  data.map((row) => (
                    <li key={row.id}>
                      <h2>{row.title}</h2>
                      <img src={row.url} alt="icon" />
                    </li>
                  ))}
              </ul>
            </li>
            <li className="home_item"></li>
            <li className="home_item"></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
