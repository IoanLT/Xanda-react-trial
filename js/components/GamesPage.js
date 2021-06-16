import React from "react";
import GameCard from "./GameCard";
// Importing images
import logo from "../../assets/logo.png";

const GamesPage = ({
	data,
	setData,
	addToBasket,
	setAddToBasket,
	removed,
	setRemoved,
}) => {
	return (
		<main>
			<div className="logo">
				<img src={`${logo}`} alt="game logo" />
			</div>
			<div className="grid-games-wrapper">
				{data.map((game, index) => (
					<GameCard
						game={game}
						index={index}
						key={game.id}
						addToBasket={addToBasket}
						setAddToBasket={setAddToBasket}
						data={data}
						setData={setData}
						setRemoved={setRemoved}
					/>
				))}
			</div>
		</main>
	);
};

export default GamesPage;
