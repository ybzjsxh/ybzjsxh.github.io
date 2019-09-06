import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Layout from '../views/layout';

export default () => (
	<Router>
	  <Switch>
			<Route path='/react-blog' component={Layout} />
			<Redirect from='/' to='/react-blog'/>
	  </Switch>
	</Router>
)
