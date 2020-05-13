import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { loginUserActions } from 'actions/loginUserActions';

export type UserState = {
  id: number;
  name: string;
};

export type LoginUserState = {
  user?: UserState;
  logined: boolean;
};

const initialState: LoginUserState = {
  logined: false
};

export const loginUserReducer = reducerWithInitialState(initialState)
  .case(loginUserActions.loginAction, (state: LoginUserState, payload: UserState): LoginUserState => ({
    ...state,
    user: payload,
    logined: true
  }));
