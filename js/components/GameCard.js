import React from "react";
import coins from '../../assets/coins.png'

const GameCard = ({ id, image, title, description, price }) => {
	return (
		<div className="game-card">
			<div>
				<img src={image} alt={title} />
			</div>
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
				<p>
					<span>
						<img src={`${coins}`} alt="coins" />
					</span>
				</p>
				<button>Add to Basket</button>
			</div>
		</div>
	);
};

export default GameCard;
