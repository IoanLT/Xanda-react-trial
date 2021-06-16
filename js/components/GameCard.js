import React from "react";
import coins from "../../assets/coins.png";
import controller from "../../assets/controller.png";

const GameCard = ({
	game,
	index,
	addToBasket,
	setAddToBasket,
	data,
	setRemoved,
}) => {
	const {id, image, title, description, price} = game;

	const handleAddToBasket = (e) => {
		let selectedGame = data[e.target.id];

		if (addToBasket.find((duplicate) => duplicate === selectedGame)) {
			alert("you already have selected this game");
		} else {
			let myFavorites = [...addToBasket];
			myFavorites.push(selectedGame);

			setAddToBasket(myFavorites);
			setRemoved(false);
		}
	};

	return (
		<div
			className="game-card"
			// style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
		>
			<div>
				<img src={image} alt={title} />
			</div>
			<div className="card-description">
				<h4>{title}</h4>
				<p>{description}</p>
				<div className="coin-price">
					<img src={`${coins}`} alt="coins" />
					<p>{price} Gil</p>
				</div>
				<button id={index} onClick={handleAddToBasket}>
					Add to Basket
				</button>
			</div>
			<img className="controller-img" src={controller} alt="controller image" />
		</div>
	);
};

export default GameCard;
