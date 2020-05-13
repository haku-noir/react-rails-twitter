import {
  createStore as reduxCreateStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import logger from 'redux-logger';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { TweetsState, tweetsReducer } from 'reducers/tweetsReducer';
import { AnyAction } from 'typescript-fsa';
import { loginUserReducer, LoginUserState } from 'reducers/loginUserReducer';

export type RootState = {
  router: RouterState,
  tweets: TweetsState,
  loginUser: LoginUserState
};

export const createStore = (history: History) => {
  const rootReducer = combineReducers<RootState>({
    router: connectRouter(history),
    tweets: tweetsReducer,
    loginUser: loginUserReducer
  });

  const thunk: ThunkMiddleware<RootState, AnyAction> = thunkMiddleware;

  return reduxCreateStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger,
        thunk
      ),
    ),
  );
}
