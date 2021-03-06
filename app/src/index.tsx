import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from 'store';
import { Switch, Route } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { MenuAppBar } from 'containers/MenuAppBar';
import { TweetList } from 'containers/TweetList';
import { TweetShow } from 'containers/TweetShow';
import { UserListPanel } from 'components/UserListPanel';
import { UserLoginForm } from 'containers/UserLoginForm';
import { UserRegisterForm } from 'containers/UserRegisterForm';
import { UserShow } from 'containers/UserShow';
import { ErrorAlert } from 'containers/ErrorAlert';
import { TweetSendButton } from 'containers/TweetSendButton';

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
          <ErrorAlert />
        </Grid>
        <Grid container item justify="center">
          <Switch>
            <Route exact path="/" component={TweetList} />
            <Route exact path="/tweets/show" component={TweetShow} />
            <Route exact path="/users" component={UserListPanel} />
            <Route exact path="/users/login" component={UserLoginForm} />
            <Route exact path="/users/register" component={UserRegisterForm} />
            <Route exact path="/users/show" component={UserShow} />
          </Switch>
        </Grid>
        <TweetSendButton />
      </Grid>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
