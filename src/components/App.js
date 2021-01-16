import React from 'react';
import { Router , Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import MuiContainer from '@material-ui/core/Container';

import history from '../history';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Router history={history}>
        <Header />
        <MuiContainer maxWidth="xl">
          <Switch>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" component={StreamCreate}/>
            <Route path="/streams/edit/:id" component={StreamEdit}/>
            <Route path="/streams/delete/:id" component={StreamDelete}/>
            <Route path="/streams/:id" component={StreamShow}/>
          </Switch>
        </MuiContainer>
      </Router>
    </div>
  );
};

export default App;