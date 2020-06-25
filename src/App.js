// React
import React, { useEffect } from "react";
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
import Resources from "./components/resources/Resources";
import Report from "./components/Report";
import useDarkMode from "./customHooks/useDarkMode";

// Common Components
// import Navigation from "./partials/Navigation";
import Responsive from "./partials/Responsive";

// Design
import "./App.scss";

// Google Analytics
import ReactGA from "react-ga";

const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => {
  store.getState();
});

function App() {
  ReactGA.initialize("UA-169193629-1"); //this is our unique ga id
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [darkMode] = useDarkMode(false);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  });

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
          <nav></nav>{/* Navigation Placeholder */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
