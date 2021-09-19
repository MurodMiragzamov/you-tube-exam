import React from "react";
import "./Home.scss";

function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 5)));
  }, []);
  return (
    <>
      {/* <ul>
        {data &&
          data.map((row) => (
            <li key={row.id}>
              <h2>{row.title}</h2>
              <img src={row.url} alt="icon" />
            </li>
          ))}
      </ul> */}
    </>
  );
}

export default Home;
