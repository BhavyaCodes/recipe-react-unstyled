import "./App.css";
import Landing from "./components/Landing";
import Recipe from "./components/Recipe.jsx";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/category/:category">
          <Categories />
        </Route>
        <Route path="/recipe/:id">
          <Recipe />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
