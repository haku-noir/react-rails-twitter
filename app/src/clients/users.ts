import { UserState, PassUserState } from "reducers/loginUserReducer";

const baseURL = 'http://localhost';

export const addUser = (user: PassUserState) => fetch(`${baseURL}/users`, {
  method: "POST",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});

export const getUser = (id: number) => fetch(`${baseURL}/users/${id}`, {
  method: "GET",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const updateUser = (user: UserState) => fetch(`${baseURL}/users/${user.id}`, {
  method: "PUT",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});
