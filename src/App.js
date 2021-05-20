import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import Details from "./screens/Details";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post">
            <Posts />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
