import React from "react";
import BasketListItem from "./BasketListItem";

let price = 0;

const Basket = ({ addToBasket, removed, setRemoved, goToCheckout }) => {	

	return (
		<div className="basket-wrapper">
			<h2>Basket</h2>
			{/* Here we display the list items if it has been added to the basket and 
			calculate the total price. Else, we display that there are not items in the basket */}
			{addToBasket.length > 0 ? (
				addToBasket.map((game, index) => {
					price += game.price;					

					return (
						<BasketListItem
							key={game.id}
							index={index}
							addToBasket={addToBasket}
							removed={removed}
							setRemoved={setRemoved}
						/>
					);
				})
			) : (
				<h5>There are no items in the basket</h5>
			)}

			{/* We're showing the total price if an item has been added to the basket */}
			{addToBasket.length > 0 && (
				<div className="basket-total">
					<h4>Total</h4>
					<h4>{price}</h4>
				</div>
			)}

			<button onClick={goToCheckout}>Continue</button>
		</div>
	);
};

export default Basket;
