import actionCreatorFactory from 'typescript-fsa';
import { UserState } from 'reducers/loginUserReducer';

const actionCreator = actionCreatorFactory();

export const loginUserActions = {
  loginAction: actionCreator<UserState>('LOGIN'),
};
