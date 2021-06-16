import React from "react";
import GameCard from "./GameCard";
// Importing images
import logo from "../../assets/logo.png";

const GamesPage = ({
	data,
	setData,
	addToBasket,
	setAddToBasket,
	handleAddToBasket,
}) => {
	return (
		<main>
			<div className="logo">
				<img src={`${logo}`} alt="game logo" />
			</div>
			<div className="grid-games-wrapper">
				{data.map((product, index) => (
					<GameCard
						product={product}
						index={index}
						key={product.id}
						addToBasket={addToBasket}
						setAddToBasket={setAddToBasket}
						data={data}
						setData={setData}
						handleAddToBasket={handleAddToBasket}
					/>
				))}
			</div>
		</main>
	);
};

export default GamesPage;
