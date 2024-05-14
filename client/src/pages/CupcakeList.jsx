import { useLoaderData } from "react-router-dom";
import { useEffect, useState  } from "react";
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
  console.info(useLoaderData());
  const Api = useLoaderData("API");

  const cupcakes = Api.map((cupcake) => (
    <li key={cupcake.id}>
      <Cupcake data={cupcake} />
    </li>
  ));


  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);
  useEffect (()=> {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        const data = await response.json();
        return setAccessories(data);
      } catch (error) {
        return [];
      }
    };
    fetchAccessories();
  }, []);
  
  const filterAccessories = accessories.map((accessorie)=> <option value={accessorie.id} key={accessorie.id}>{accessorie.name} </option>)

  // Step 5: create filter state
  // const [filteredAccessories, setFilteredAccessories] = useState("")
  // const handleAccessoriesChange = () => {
  //   filterAccessories === "" ?  setFilteredAccessories({cupcakes}) :
  //   cupcakes.filter
  // }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {filterAccessories}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
