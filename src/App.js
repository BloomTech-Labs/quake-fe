// React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducers } from "./reducers/index";

// Components
import Header from "./partials/Header";
import Activity from "./components/activity/Activity";
import Feed from "./components/feed/Feed";
import About from "./components/About";
import Resources from "./components/Resources";
import Report from "./components/Report";

// Common Components
import Navigation from "./partials/Navigation";
import Responsive from "./partials/Responsive";

// Design
import "./App.scss";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Responsive />
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Activity} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/report" component={Report} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
