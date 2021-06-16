import React, { useState } from "react";
import Header from "./components/Header";
import GamesPage from "./components/GamesPage";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
// Importing images
import game1 from "../assets/game1.jpg";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game3.jpg";
import game4 from "../assets/game4.jpg";

// This is the relevant data for each game. This would normally come back from an API
const gamesData = [
	{
		id: 1,
		image: `${game1}`,
		title: "Star Wars: Battlefront",
		description: "Immerse Yourself in the Ultimate Star Wars Experience",
		price: 300,
	},
	{
		id: 2,
		image: `${game2}`,
		title: "Dying Light",
		description:
			"Dying Light is an open world first person survival horror action-adventure video game developed by Techland",
		price: 500,
	},
	{
		id: 3,
		image: `${game3}`,
		title: "Bloodborne",
		description:
			"Bloodborne is an action role-playing video game developed by FromSoftware",
		price: 9999,
	},
	{
		id: 4,
		image: `${game4}`,
		title: "Evolve",
		description:
			"Evolve is a first-person shooter video game developed by Turtle Rock Studios",
		price: 150,
	},
];

const pageProducts = "products";
const pageCart = "checkout";

const App = () => {
	const [data, setData] = useState(gamesData);
	const [addToBasket, setAddToBasket] = useState([]);
	const [page, setPage] = useState(pageProducts);	

	const goToCheckout = () => {
		if (addToBasket.length > 0) {
			setPage(pageCart);
		}
	};

	const goToProducts = () => {
		setPage(pageProducts);
	};

	const handleAddToBasket = (productToAdd) => {		
		if (addToBasket.find((product) => product === productToAdd)) {
			alert("you already have selected this product");
		} else {
			setAddToBasket([...addToBasket, productToAdd]);
		}
	};

	const removeFromCart = (productToRemove) => {
		setAddToBasket(
			addToBasket.filter((product) => product !== productToRemove)
		);
	};

	return (
		<div className="main-wrapper">
			<Header />
			{page === pageProducts && (
				<div>
					<div className="games-content">
						<GamesPage
							data={data}
							setData={setData}
							addToBasket={addToBasket}
							setAddToBasket={setAddToBasket}
							handleAddToBasket={handleAddToBasket}
						/>
					</div>
					<Basket
						addToBasket={addToBasket}
						goToCheckout={goToCheckout}
						removeFromCart={removeFromCart}
					/>
				</div>
			)}

			{page === pageCart && (
				<Checkout
					addToBasket={addToBasket}
					setAddToBasket={setAddToBasket}
					goToProducts={goToProducts}
					removeFromCart={removeFromCart}
				/>
			)}
		</div>
	);
};

export default App;
