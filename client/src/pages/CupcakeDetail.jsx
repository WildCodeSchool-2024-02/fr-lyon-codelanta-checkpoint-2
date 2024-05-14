import { useParams } from "react-router-dom";

function CupcakeDetail() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default CupcakeDetail;
