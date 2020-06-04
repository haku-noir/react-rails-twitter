const baseURL = 'http://localhost';

export const follow = (follower_id: number, following_user_id: number) => fetch(`${baseURL}/follow`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ follower_id, following_user_id }),
});

export const unfollow = (follower_id: number, following_user_id: number) => fetch(`${baseURL}/unfollow`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ follower_id, following_user_id }),
});
