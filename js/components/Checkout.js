import React from 'react';
import BasketListItem from './BasketListItem';

const Checkout = ({ addToBasket, goToProducts, removeFromCart }) => {
	return (
		<div>
			<h1>This is the Checkout page</h1>
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
			<button onClick={goToProducts}>Go back</button>
		</div>
	);
};

export default Checkout
