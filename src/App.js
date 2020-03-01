import React, { Component } from "react";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./commons/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={MovieDetails} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
