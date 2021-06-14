import React from "react";
import coins from "../../assets/coins.png";
import controller from '../../assets/controller.png';

const GameCard = ({ id, image, title, description, price }) => {
	return (
		<div className="game-card">
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
				<button>Add to Basket</button>
			</div>
			<img className="controller-img" src={controller} alt="controller image" />
		</div>
	);
};

export default GameCard;
