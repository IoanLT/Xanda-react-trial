import React from 'react'

const handleBasket = () => {
	setAddToBasket(true);

	const newList = data.filter((item) => item.id === id);

	// setData(newList[0]);

	if (newList[0].id === id) {
		// setDisabled(true);
		setDisabled(!disabled);
	}
};

const BasketListItem = () => {
  return (
    <div>
      
    </div>
  )
}

export default BasketListItem
