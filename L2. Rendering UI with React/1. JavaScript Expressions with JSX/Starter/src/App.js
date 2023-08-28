import logo from "./logo192.png";
import "./App.css";

const App = () => {
	const library = "React";

	const facts = {
		releaseDate: "May 2013",
		language: "JavaScript",
		license: "MIT",
	};

	const aboutReact = (facts) =>
		`Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;

	return (
		<div className="container"><img src={logo} alt="React logo" /><h1>{library}</h1><p>{aboutReact(facts)}</p></div>
	);
};

export default App;
