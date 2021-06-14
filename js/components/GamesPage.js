import React, { useState } from "react";
import GameCard from "./GameCard";
// Importing images
import game1 from "../../assets/game1.jpg";
import game2 from "../../assets/game2.jpg";
import game3 from "../../assets/game3.jpg";
import game4 from "../../assets/game4.jpg";


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

const GamesPage = () => {
	const [data] = useState(gamesData);
	console.log(data);

	return (
		<div>
			{gamesData.map((game) => (
				<GameCard
					id={game.id}
					key={game.id}
					image={game.image}
					title={game.title}
					description={game.description}
					price={game.price}
				/>
			))}
		</div>
	);
};

export default GamesPage;
