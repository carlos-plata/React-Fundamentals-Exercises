import Movie from "./Movie";

const MovieList = ({ users, movies, usersFavoriteMovie }) => {
	const movie = Object.keys(movies).map((id) => (
		<Movie
			key={id}
			users={users}
			usersFavoriteMovie={usersFavoriteMovie[id]}
			movie={movies[id]}
		/>
	));
	return <ul>{movie}</ul>;
};

export default MovieList;
