import { TweetState } from "reducers/tweetsReducer";

const baseURL = 'http://localhost';

export const fetchPosts = () => fetch(`${baseURL}/posts`, {
  method: "GET",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const sendPost = (params: TweetState) => fetch(`${baseURL}/posts`, {
  method: "POST",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(params)
});

export const getPost = (id: number) => fetch(`${baseURL}/posts/${id}`, {
  method: "GET",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const deletePost = (id: number) => fetch(`${baseURL}/posts/${id}`, {
  method: "DELETE",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
