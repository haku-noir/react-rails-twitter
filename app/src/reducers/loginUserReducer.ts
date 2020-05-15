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
  logined: boolean;
};

const initialState: LoginUserState = {
  logined: false
};

export const loginUserReducer = reducerWithInitialState(initialState)
  .case(loginUserActions.login.async.done, (state: LoginUserState, payload): LoginUserState => {
    if(payload.result === undefined) return state;
    return {
      ...state,
      user: payload.result,
      logined: true
    };
  })
  .case(loginUserActions.addUser.async.done, (state: LoginUserState, payload): LoginUserState => ({
    ...state,
    user: payload.result,
    logined: true
  }));
