import React, { Fragment } from "react";
import MainHeader from "./components/MainHeader";
import Navbar from './components/Navbar';
import Summary from './components/Summary';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => {
            console.log(props);
            return (<div>
              <MainHeader />
              <Navbar />
              <Summary />
              {
                ["About", "Tecchnical Skills", "Experiences", "Projects", "Education"].map((key, i) => {
                  return <div style={{ height: "100vh", width: "100vw" }} className="container-fluid px-0 text-center jumbotron" id={`cont-${i}`}>
                    <div className="h4">
                      {key}
                    </div>
                  </div>
                })
              }
            </div>)
          }} />
          <Route exact path="*" render={(props) => (<h2>Not Found!</h2>)} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
