import React from "react";
import GameCard from "./GameCard";
// Importing images
import logo from "../../assets/logo.png";

const GamesPage = ({
	data,
	setData,
	addToBasket,
	setAddToBasket,
	favorites,
	setFavorites,
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
						favorites={favorites}
						setFavorites={setFavorites}
					/>
				))}
			</div>
		</main>
	);
};

export default GamesPage;
