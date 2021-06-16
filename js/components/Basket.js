import React from "react";
import BasketListItem from "./BasketListItem";

const Basket = ({ addToBasket, goToCheckout, removeFromCart }) => {
	let price = 0;
	
	return (
		<div className="basket-wrapper">
			<h2>Basket</h2>
			{/* Here we display the list items if it has been added to the basket and 
			calculate the total price. Else, we display that there are not items in the basket */}
			{addToBasket.length > 0 ? (
				addToBasket.map((product, index) => {
					price += product.price;

					return (
						<BasketListItem
							product={product}
							key={product.id}
							index={index}
							addToBasket={addToBasket}
							removeFromCart={removeFromCart}
						/>
					);
				})
			) : (
				<h5>There are no items in the basket</h5>
			)}

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
