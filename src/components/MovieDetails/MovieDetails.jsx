import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieDetails({}) {
  const history = useHistory();
  const id = useParams();
  const genres = useSelector((store) => store.genres);
  const movieDetails = useSelector((store) => store.movieDetails);

  const navigateHome = () => {
    history.push("/");
  };
  useEffect(() => {
    dispatch({
      type: "GET_DETAILS",
      payload: id.id,
    });
  }, []);

  return (
    <div data-testid="movieDetails">
      <div>
        <img src={movieDetails.poster} />
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.description}</p>
        <ul>
          {genres.map((genre, i) => (
            <li key={i}>{genre.category}</li>
          ))}
        </ul>

        <button data-testid="toList" onClick={navigateHome}>
          Home
        </button>
      </div>
    </div>
  );
}
