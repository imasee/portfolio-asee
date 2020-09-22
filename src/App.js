import React, { Fragment } from "react";
import MainHeader from "./components/Landing";
import Navbar from './components/Navlinks';
import Summary from './components/Summary';
import Main from './components/Main';
import Layout from './components/hoc/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home" render={Main} />
            <Route exact path="*" render={(props) => (<h2>Not Found!</h2>)} />
          </Switch>
        </Layout>
      </Router>
    </Fragment>
  );
}

export default App;
