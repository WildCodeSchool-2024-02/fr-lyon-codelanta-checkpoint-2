import { useLocation } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetails() {
  const location = useLocation();
  const { cupcake } = location.state;
  return <Cupcake data={cupcake} />;
}
