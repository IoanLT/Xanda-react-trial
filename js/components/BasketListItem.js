import React from "react";
import bin from "../../assets/bin.png";
import coins from "../../assets/coins.png";

const BasketListItem = ({ addToBasket, index}) => {
	
	return (
		<section className="basket-main-section">
			<div>
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
					<button id={index}>
						<img src={bin} alt="bin thumbnail" />
					</button>
				</div>

				<hr />
			</div>
		</section>
	);
};

export default BasketListItem;
