import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const someCupcakes = [];
someCupcakes.push(
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  }
);

function CupcakeList() {
  const cupcakesData = useLoaderData();
  const [accessories, setAccessories] = useState([]);
  const [filtreCupcake, setFiltreCupcake] = useState("");

  console.info(cupcakesData);
  console.info(useLoaderData());

  function getAccessories() {
    return axios
      .get("http://localhost:3310/api/accessories")
      .then((response) => setAccessories(response.data));
  }

  useEffect(() => {
    getAccessories();
  }, []);

  const handleChange = (event) => {
    setFiltreCupcake(event.target.value);
  };

  console.info(accessories);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {accessories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        <li className="cupcake-item">
          {cupcakesData
            .filter(
              (accessor) =>
                filtreCupcake === "" || accessor.accessory_id === filtreCupcake
            )
            .map((cupcake) => (
              <li key={cupcake.id} className="cupcake-item">
                <Cupcake data={cupcake} />
              </li>
            ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
