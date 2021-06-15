import React from 'react'

const Basket = ({addToBasket, data}) => {

  return (
		<div className="basket-wrapper">
			<h2>Basket</h2>
			{
        addToBasket 
          ? (<h5>Show me tha game</h5>) 
          : (<h5>No items</h5>)}

			<button>Continue</button>
		</div>
	);
}

export default Basket
