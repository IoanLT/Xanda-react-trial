import React from 'react'

const Checkout = ({ goToProducts }) => {
	return (
		<div>
			<h1>This is the Checkout page</h1>
			<button onClick={goToProducts}>Go back</button>
		</div>
	);
};

export default Checkout
