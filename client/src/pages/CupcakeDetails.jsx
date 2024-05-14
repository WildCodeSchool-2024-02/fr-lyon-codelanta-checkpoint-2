import { useLoaderData, useParams } from "react-router-dom";

import Cupcake from "../components/Cupcake";

export default function CupcakeDetails() {
  const cupcakes = useLoaderData();
  const { id } = useParams();

  const selectCupcake = cupcakes.filter(
    (cupcake) => parseInt(cupcake.id, 10) === parseInt(id, 10)
  );
  return (
    <div>
      <Cupcake data={selectCupcake[0]} />
    </div>
  );
}
