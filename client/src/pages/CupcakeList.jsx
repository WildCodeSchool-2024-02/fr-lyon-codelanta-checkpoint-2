import { useLoaderData } from "react-router-dom";
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
  // Step 1: get all cupcakes
  const cupcakes = useLoaderData();

  console.info(useLoaderData());

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState();

  function getAccessories() {
    fetch("http://localhost:3310/api/accessories")
      .then((Response) => Response.json())
      .then((data) => {
        setAccessories(data);
      });
  }

  useEffect(() => {
    getAccessories();
  }, []);
  console.info(accessories);
  // Step 5: create filter state

  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const filteredCupcakes = cupcakes.filter(
    (cupcake) => cupcake.accessory_id === filter
  );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
          >
            <option value="">---</option>
            <option value="1">Cherry</option>
            <option value="2">Donut</option>
            <option value="3">Chocolate</option>
            <option value="4">Wild</option>
            <option value="5">Christmas Candy</option>
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}

        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
        {filter === "" &&
          cupcakes.map((cupcake) => (
            <li className="cupcake-item" key={cupcake.id}>
              <Cupcake data={cupcake} />
            </li>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
