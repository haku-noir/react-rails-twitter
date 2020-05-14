import actionCreatorFactory from 'typescript-fsa';
import asyncFactory from 'typescript-fsa-redux-thunk';
import { UserState, PassUserState, LoginUserState } from 'reducers/loginUserReducer';
import { addUser } from 'clients/users';

const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<LoginUserState>(actionCreator);

export const loginUserActions = {
  loginAction: actionCreator<UserState>('LOGIN'),
  addUser: asyncActionCreator<PassUserState, UserState>(
    'ADD_USER',
    (user: PassUserState) => new Promise(resolve => {
      addUser(user)
        .then((res) => res.json())
        .then((res) => {
          resolve(res.data);
        })
    })
  ),
};
