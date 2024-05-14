// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";
// const someCupcakes = [];
// someCupcakes.push(
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   }
// );

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakelist, setCupcakeList] = useState([]);
  const [cupccupcakeAccessories, setCupcakeAccessories] = useState([]);
  const [filtreCupcake, setFiltreCupcake] = useState("");
  // console.log(cupcakelist);
  function getCupcakeAccessories() {
    axios
      .get("http://localhost:3310/api/accessories")
      .then((response) => setCupcakeAccessories(response.data));
  }

  function getCupcake() {
    axios
      .get("http://localhost:3310/api/cupcakes")
      .then((response) => setCupcakeList(response.data));
  }

  useEffect(() => {
    getCupcakeAccessories();
    getCupcake();
  }, []);

  const handleChange = (event) => {
    setFiltreCupcake(event.target.value);
  };
  // console.info(useLoaderData());

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {cupccupcakeAccessories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        <li className="cupcake-item">
          {cupcakelist
            .filter(
              (accessor) =>
                filtreCupcake === "" || accessor.accessory_id === filtreCupcake
            )
            .map((cupcake) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Link to={`/cupcakes/${cupcake.id}`} state={{ cupcake }}>
                  <Cupcake data={cupcake} />
                </Link>
              </li>
            ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
