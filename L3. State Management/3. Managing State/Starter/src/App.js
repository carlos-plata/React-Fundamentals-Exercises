import { useState } from "react";
import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
	const [likes, setLikes] = useState(0);

	function countLikes() {
		setLikes(likes + 1);
	}
	return (
		<div className="container">
			<h2>Like this photo!</h2>
			<img src={corgi} alt="Corgi"></img>
			<p>Amount of likes: {likes}</p>
			<button onClick={countLikes}>
				Click to like the picture!.
			</button>
			<button onClick={() => setLikes(0)}>
				Reset likes to 0
			</button>
		</div>
	);
};

export default App;
