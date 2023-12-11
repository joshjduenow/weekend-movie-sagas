import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./MovieDetails.css"

export default function MovieDetails({}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const param = useParams();

  const movie = useSelector((store) => store.details);
  const genres = useSelector((store) => store.genres);

  const backToList = () => {
    history.push("/");
  };

  useEffect(() => {
    dispatch({
      type: "GET_GENRES",
      payload: param.id,
    });
  }, []);

  return (
    <div data-testid="movieDetails">
      <div>
        <img src={movie.poster} />
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <h4> Genre:</h4>

        {genres.map((genre, i) => (
          <p key={i}>{genre.category}</p>
        ))}

        <Button variant="outlined" color="error" data-testid="toList" onClick={backToList}>
          Back To List
        </Button>
      </div>
    </div>
  );
}
