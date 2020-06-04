import {
  createStore as reduxCreateStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import logger from 'redux-logger';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { TweetsState, tweetsReducer } from 'reducers/tweetsReducer';
import { AnyAction } from 'typescript-fsa';
import { usersReducer, UsersState } from 'reducers/usersReducer';
import { ErrorState, errorReducer } from 'reducers/errorReducer';

export type RootState = {
  router: RouterState,
  tweets: TweetsState,
  users: UsersState,
  error: ErrorState
};

export const createStore = (history: History) => {
  const rootReducer = combineReducers<RootState>({
    router: connectRouter(history),
    tweets: tweetsReducer,
    users: usersReducer,
    error: errorReducer,
  });

  const thunk: ThunkMiddleware<RootState, AnyAction> = thunkMiddleware;

  return reduxCreateStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger,
        thunk,
      ),
    ),
  );
};
