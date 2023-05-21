import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Card} from "../../js/component/card"
import {Jumbotron} from "../../js/component/jumbotron"
import {Navbar} from "../../js/component/navbar"
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	);
};

export default Home;
