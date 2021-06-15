import React from "react";
import GameCard from "./GameCard";
// Importing images
import logo from "../../assets/logo.png";

const GamesPage = ({
	data,
	setData,
	addToBasket,
	setAddToBasket,	
}) => {
	return (
		<main>
			<div className="logo">
				<img src={`${logo}`} alt="game logo" />
			</div>
			<div className="grid-games-wrapper">
				{data.map((game, index) => (
					<GameCard
						index={index}
						id={game.id}
						key={game.id}
						image={game.image}
						title={game.title}
						description={game.description}
						price={game.price}
						addToBasket={addToBasket}
						setAddToBasket={setAddToBasket}
						data={data}
						setData={setData}						
					/>
				))}
			</div>
		</main>
	);
};

export default GamesPage;
