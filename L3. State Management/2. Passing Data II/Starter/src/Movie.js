const Movie = ({ users, usersFavoriteMovie, movie }) => {
  return (
    <li key={movie.id}>
      <h2>{movie.name}</h2>
      <h3>Liked By:</h3>

      {!usersFavoriteMovie || usersFavoriteMovie.length === 0 ? (
        <p>No user liked this movie.</p>
      ) : (
        <ul>
          {usersFavoriteMovie &&
            usersFavoriteMovie.map((userId) => {
              return (
                <li key={userId}>
                  <p>{users[userId].name}</p>
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
};

export default Movie;
