import actionCreatorFactory from 'typescript-fsa';
import asyncFactory from 'typescript-fsa-redux-thunk';
import { UserState, PassUserState, LoginUserState, ImageUserState } from 'reducers/loginUserReducer';
import { addUser, login, logout, updateUser } from 'clients/users';

const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<LoginUserState>(actionCreator);

export const loginUserActions = {
  login: asyncActionCreator<PassUserState, UserState>(
    'LOGIN',
    (user: PassUserState) => new Promise(resolve => {
      login(user)
        .then((res) => res.json())
        .then((res) => {
          resolve(res.data);
        })
    })
  ),
  logout: asyncActionCreator<PassUserState, UserState>(
    'LOGOUT',
    () => new Promise(resolve => {
      logout()
        .then(() => {
          resolve();
        })
    })
  ),
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
  updateUser: asyncActionCreator<ImageUserState, UserState>(
    'UPDATE_USER',
    (user: ImageUserState) => new Promise(resolve => {
    updateUser(user)
      .then((res) => res.json())
      .then((res) => {
        resolve(res.data);
      })
    })
  ),
};
