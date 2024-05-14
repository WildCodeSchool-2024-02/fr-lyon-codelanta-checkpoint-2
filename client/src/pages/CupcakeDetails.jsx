import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CupcakeDetails() {
	const { id } = useParams();
	const [cupcake, setCupcake] = useState(null);

	useEffect(() => {
		const fetchCupcake = async () => {
			try {
				const response = await fetch(
					`http://localhost:3310/api/cupcakes/${id}`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch cupcake");
				}
				const data = await response.json();
				setCupcake(data);
			} catch (error) {
				console.error("Error fetching cupcake: ", error);
			}
		};
		fetchCupcake();
	}, [id]);

	return (
		<div>
			{cupcake ? (
				<div>
					<h1>{cupcake.name}</h1>
					<p>Color1: {cupcake.color1}</p>
					<p>Color2: {cupcake.color2}</p>
					<p>Color3: {cupcake.color3}</p>
					<p>Accessory: {cupcake.accessory}</p>
				</div>
			) : (
				<p>Loading page...</p>
			)}
		</div>
	);
}

export default CupcakeDetails;
