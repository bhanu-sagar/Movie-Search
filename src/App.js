import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MovieDetails from "./components/movie-details";
import Movies from "./components/movies";
import CardList from "./components/card-list";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/movie-details" component={MovieDetails} />
        <Route path="/card-details" component={CardList} />
      </Switch>
    </Router>
  );
}

export default App;
