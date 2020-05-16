import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from 'store';
import { Switch, Route } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { TweetList } from 'containers/TweetList';
import { TweetShow } from 'containers/TweetShow';
import { UserLoginForm } from 'containers/UserLoginForm';
import { UserRegisterForm } from 'containers/UserRegisterForm';
import { MenuAppBar } from 'containers/MenuAppBar';

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Grid container>
        <Grid container item justify="center">
          <MenuAppBar />
        </Grid>
        <Grid container item justify="center">
          <Switch>
            <Route exact path={'/'} component={TweetList}/>
            <Route exact path={'/tweets/:id'} component={TweetShow}/>
            <Route exact path={'/users/login'} component={UserLoginForm}/>
            <Route exact path={'/users/register'} component={UserRegisterForm}/>
          </Switch>
        </Grid>
      </Grid>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
