import React from "react";
import bin from "../../assets/bin.png";
import coins from "../../assets/coins.png";

const BasketListItem = ({ addToBasket, index }) => {
	console.log(addToBasket);
	return (
		<section className="basket-main-section">
			<div className="basket-list-item">
				<div className="list-item-img">
					<img src={addToBasket[index].image} alt="" />
				</div>
				<div className="list-item-title">
					<h5>{addToBasket[index].title}</h5>
					<div className="list-item-price">
						<img src={coins} alt="coins thumbnail" />
						<p>{addToBasket[index].price} Gil</p>
					</div>
				</div>
				<button>
					<img src={bin} alt="bin thumbnail" />
				</button>
			</div>

			<hr />			
		</section>
	);
};

export default BasketListItem;
