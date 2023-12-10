import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieItem({ movie }) {
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/details/${movie.id}`);
  };

  return (
    <div data-testid="movieItem">
      <div>
        <h3>{movie.title}</h3>
        <img
          data-testid="toDetails"
          src={movie.poster}
          alt={movie.title}
          onClick={handleDetails}
        />
      </div>
    </div>
  );
}
