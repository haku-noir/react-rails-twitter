const baseURL = 'http://localhost';

export const like = (user_id: number, post_id: number) => fetch(`${baseURL}/like`, {
  method: "POST",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({user_id, post_id})
});

export const dislike = (user_id: number, post_id: number) => fetch(`${baseURL}/dislike`, {
  method: "POST",
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({user_id, post_id})
});
