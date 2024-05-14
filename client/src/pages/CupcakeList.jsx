// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
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

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  /*   const cupcakes = useLoaderData();
  console.info(useLoaderData()); */
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);
  const [filteredCupcakes, setFilteredCupcakes] = useState(someCupcakes);
  function handleChange(e) {
    if (e.target.value === "") {
      setFilteredCupcakes(someCupcakes);
    } else {
      setFilteredCupcakes(
        someCupcakes.filter((cupcake) => cupcake.accessory === e.target.value)
      );
    }
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option value={accessory.slug} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
