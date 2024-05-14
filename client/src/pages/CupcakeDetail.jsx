import { useLocation } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const location = useLocation();
  const { cupcake } = location.state;

  // useEffect(() => {
  //   axios.get(`http://localhost:3310/api/cupcakes/${id}`).then((response) => {
  //     SetCupcakeDetail(response.data);
  //   });
  // }, [id]);

  return <Cupcake data={cupcake} />;
}

export default CupcakeDetails;
