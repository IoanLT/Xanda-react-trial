import React from "react";
import Header from "./components/Header";
import GamesPage from "./components/GamesPage";
import Basket from "./components/Basket";

const App = () => {
	return (
		<div>
			<Header />
			<div className="main-content">
				<GamesPage />
				<Basket />
			</div>
		</div>
	);
};

export default App;
