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

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Grid container justify="center">
        <Switch>
          <Route exact path={'/'} component={TweetList}/>
          <Route exact path={'/tweets/:id'} component={TweetShow}/>
        </Switch>
      </Grid>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
