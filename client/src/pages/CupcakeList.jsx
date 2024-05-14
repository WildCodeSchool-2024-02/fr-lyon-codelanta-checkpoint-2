import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
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
  // console.info(useLoaderData());
  const cupCakeData = useLoaderData("Cupcakes");

  // Step 3: get all accessories

  const [accessory, setAccessorie] = useState(null);

  useEffect(() => {
    if (accessory !== null) {
      fetch("http://localhost:3310/api/accessories")
        .then((res) => res.json())
        .then((json) => setAccessorie(json));
    }
  }, [accessory]);

  // Step 4 :
  const [option, setOption] = useState("");

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by {/* Step 4: add an option for each accessory */}
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            id="cupcake-select"
          >
            {cupCakeData.map((cupcake) => (
              <option key={cupcake.accessory_id} value={cupcake.accessory}>
                {cupcake.accessory}
              </option>
            ))}
            ;
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupCakeData
          .filter((cupcake) => cupcake.accessory === option)
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
              {/* Step 5: filter cupcakes before repeating */}
            </li>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
