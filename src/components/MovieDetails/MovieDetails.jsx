import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieDetails() {
  const history = useHistory();

  const genres = useSelector(store => store.genres);
  const movieDetails = useSelector(store => store.movieDetails);

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <>
      <button data-testid="toList" onClick={navigateHome}>
        Back To Movie List
      </button>
      <div data-testid="movieDetails">
        <h1>{movieDetails.title}</h1>
        <img src={movieDetails.poster} alt={movieDetails.title} />
        <p>{movieDetails.description}</p>
      </div>
    </>
  );
}
