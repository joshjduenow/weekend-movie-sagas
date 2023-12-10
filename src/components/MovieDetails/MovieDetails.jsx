import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieDetails() {
  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <>
      <button data-testid="toList" onClick={navigateHome}>
        Back To Movie List
      </button>
      <div data-testid="movieDetails">
        <h1>Movie Details</h1>
      </div>
    </>
  );
}
