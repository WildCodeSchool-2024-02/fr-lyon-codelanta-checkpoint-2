import { useParams, useRouteLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetails() {
    const {id} = useParams();
    const index = id -1;

    const Api2 = useRouteLoaderData("API");

    const cupCakeDetail = Api2[index];

    return (
        <Cupcake data={cupCakeDetail} />
    )

}