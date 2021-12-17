import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from "./page/Product"
import Home from "./page/Home"
import Todu from "./page/Todu"
import Header from "./components/Header"

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

        <div className="app__body">
        <Route exact path="/product/:productId">
            <Header />
            <Product />
          </Route>

          <Route exact path="/tudu">
            <Todu />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </div>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
