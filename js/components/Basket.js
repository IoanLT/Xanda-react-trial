import React from "react";
import BasketListItem from './BasketListItem';

const Basket = ({ addToBasket, setAddToBasket }) => {
	return (
		<div className="basket-wrapper">
			<h2>Basket</h2>
			{addToBasket.length > 0 ? (
				addToBasket.map((game, index) => (
					<BasketListItem index={index} addToBasket={addToBasket} />
				))
			) : (
				<h5>There are no items in the basket</h5>
			)}

			<div className="basket-total">
				<h4>Total</h4>
				<h4>price</h4>
			</div>

			<button>Continue</button>
		</div>
	);
};

export default Basket;
