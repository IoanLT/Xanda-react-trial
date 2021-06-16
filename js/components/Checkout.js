import React from 'react';
import BasketListItem from './BasketListItem';

const Checkout = ({ addToBasket, goToProducts, removeFromCart }) => {
	return (
		<div className="checkout-wrapper">
			<h2>This is the Checkout page</h2>
			<button className="go-back-btn" onClick={goToProducts}>Go back</button>
			{addToBasket.length > 0 ? (
				addToBasket.map((game, index) => {
					return (
						<BasketListItem
							key={game.id}
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
					{/* <h4>{price}</h4> */}
				</div>
			)}
		</div>
	);
};

export default Checkout
