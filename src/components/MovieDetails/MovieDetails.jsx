import { useHistory } from "react-router-dom";

export default function MovieDetails() {
  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <button 
        data-testid="toList" 
        onClick={navigateHome}>
      Back To Movie List
    </button>
  );
}
