import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';

export type UserState = {
  id: number;
  name: string;
  image_name: string;
};

export type PassUserState = UserState & {
  password: string;
};

export type ImageUserState = UserState & {
  image: File;
};

export type UsersState = {
  user?: UserState;
  loggedin: boolean;
};

const initialState: UsersState = {
  loggedin: false
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.login.async.done, (state: UsersState, payload): UsersState => {
    if(payload.result === undefined) return state;
    return {
      ...state,
      user: payload.result,
      loggedin: true
    };
  })
  .case(usersActions.logout.async.done, (state: UsersState): UsersState => ({
    loggedin: false
  }))
  .case(usersActions.addUser.async.done, (state: UsersState, payload): UsersState => ({
    ...state,
    user: payload.result,
    loggedin: true
  }));
