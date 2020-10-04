import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/hoc/Layout';
import Main from './components/Main';
import Background from './backgrounds/SectionBackgroundSVG';


function App() {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path={["/", "/home"]} render={Main} />
            <Route exact path={["/bg"]} render={Background} />
            <Route exact path="*" render={(props) => (<h2>Not Found!</h2>)} />
          </Switch>
        </Layout>
      </Router>
    </Fragment>
  );
}

export default App;
