import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
      <div className="App">
        <h1>The Movies Saga</h1>
        <Router>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/details/:id">
            <MovieDetails />
          </Route>
          {/* Add Movie page */}
        </Router>
      </div>
    </>
  );
}

export default App;
