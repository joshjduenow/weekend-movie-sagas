import MovieDetails from "../MovieDetails/MovieDetails";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieItem({ movie }) {
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/details/${movie.id}`);
  };

  return (
    <div data-testid="movieItem">
      <div>
        <h3>{movie.title}</h3>
        <img data-testid="toDetails" src={movie.poster} alt={movie.title} />
        <button onClick={handleDetails}>Details</button>
      </div>
    </div>
  );
}

export default MovieItem;
