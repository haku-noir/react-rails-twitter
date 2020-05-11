import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { TweetsState, TweetState } from 'reducers/tweetsReducer';
import { fetchPosts, sendPost, deletePost } from 'clients/posts';

const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<TweetsState>(actionCreator);

export const tweetsActions = {
  updateTweets: actionCreator<TweetsState["tweets"]>('UPDATE_TWEETS'),
  fetchTweets: asyncActionCreator<void, TweetsState["tweets"]>(
    'FETCH_TWEETS',
    () => new Promise(resolve => {
      fetchPosts()
        .then((res) => res.json())
        .then((res) => {
          resolve(res.data);
        })
    })
  ),
  addTweet: asyncActionCreator<TweetState, TweetsState["tweets"]>(
    'ADD_TWEET',
    (tweet: TweetState) => new Promise(resolve => {
      sendPost(tweet)
        .then(() => fetchPosts())
        .then((res) => res.json())
        .then((res) => {
          resolve(res.data);
        })
    })
  ),
  deleteTweet: asyncActionCreator<number, TweetsState["tweets"]>(
    'DELETE_TWEET',
    (id: number) => new Promise(resolve => {
      deletePost(id)
        .then(() => fetchPosts())
        .then((res) => res.json())
        .then((res) => {
          resolve(res.data);
        })
    })
  ),
};
