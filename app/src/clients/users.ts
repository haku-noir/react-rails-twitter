import { PassUserState, ImageUserState } from "reducers/usersReducer";

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

export const login = (user: PassUserState) => fetch(`${baseURL}/login`, {
  method: "POST",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});

export const logout = () => fetch(`${baseURL}/logout`, {
  method: "POST",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
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

export const updateUser = (user: ImageUserState) => {
  const formData = new FormData();
  formData.append('name', user.name);
  if(user.image) formData.append('image', user.image);

  return fetch(`${baseURL}/users/${user.id}`, {
    method: "PUT",
    mode: 'cors',
    credentials: 'include',
    body: formData
  });
};

export const getSessionUser = () => fetch(`${baseURL}/session`, {
  method: "GET",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
