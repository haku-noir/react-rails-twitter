import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { loginUserActions } from 'actions/loginUserActions';

export type UserState = {
  id: number;
  name: string;
};

export type PassUserState = UserState & {
  password: string;
};

export type LoginUserState = {
  user?: UserState;
  loggedin: boolean;
};

const initialState: LoginUserState = {
  loggedin: false
};

export const loginUserReducer = reducerWithInitialState(initialState)
  .case(loginUserActions.login.async.done, (state: LoginUserState, payload): LoginUserState => {
    if(payload.result === undefined) return state;
    return {
      ...state,
      user: payload.result,
      loggedin: true
    };
  })
  .case(loginUserActions.logout.async.done, (state: LoginUserState): LoginUserState => ({
    loggedin: false
  }))
  .case(loginUserActions.addUser.async.done, (state: LoginUserState, payload): LoginUserState => ({
    ...state,
    user: payload.result,
    loggedin: true
  }));
