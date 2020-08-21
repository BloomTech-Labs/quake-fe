// React
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MediaQuery from "react-responsive";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducers } from "./redux/reducers/index";

// Major Components
import Activity from "./pages/activity/Activity";
import FeedContainer from "./pages/feed/FeedContainer";
import About from "./pages/about/About";
import Resources from "./pages/resources/Resources";
import BugReport from "./pages/report/BugReport";
import Sms from "./pages/sms/Sms";

// Common Components
import Header from "./components/Header";
import Navigation from "./components/navigation/Navigation";

// Utils
import useDarkMode from "./utils/customHooks/useDarkMode";

// Design
import "./App.scss";

// Google Analytics
import ReactGA from "react-ga";

const store = createStore(reducers, applyMiddleware(thunk));

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
        <div className="App">
          <Header />

          <MediaQuery minWidth={800}>
            <FeedContainer />
          </MediaQuery>

          <Switch>
            <Route exact path="/" component={Activity} />
            <Route exact path="/activity" component={Activity} />

            <Route exact path="/feed" component={FeedContainer} />

            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/report" component={BugReport} />
            <Route exact path="/sms" component={Sms} />
          </Switch>

          <Navigation />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
