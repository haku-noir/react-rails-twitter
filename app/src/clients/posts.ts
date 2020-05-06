const baseURL = 'http://localhost';

export const fetchPosts = () => fetch(`${baseURL}/posts`, {
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
