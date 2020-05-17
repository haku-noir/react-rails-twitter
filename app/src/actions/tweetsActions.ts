import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { TweetsState, TweetState } from 'reducers/tweetsReducer';
import { fetchPosts, sendPost, deletePost, updatePost } from 'clients/posts';

const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<TweetsState>(actionCreator);

const createTweets = () => new Promise<TweetsState["tweets"]>(resolve => {
  fetchPosts()
    .then((res) => res.json())
    .then((res) => {
      resolve(res.posts);
    });
});

export const tweetsActions = {
  updateTweets: actionCreator<TweetsState["tweets"]>('UPDATE_TWEETS'),
  fetchTweets: asyncActionCreator<void, TweetsState["tweets"]>(
    'FETCH_TWEETS',
    () => createTweets()
  ),
  addTweet: asyncActionCreator<TweetState, TweetsState["tweets"]>(
    'ADD_TWEET',
    (tweet: TweetState) => new Promise(resolve => {
      sendPost(tweet)
        .then(() => createTweets())
        .then((tweets) => {
          resolve(tweets);
        });
    })
  ),
  deleteTweet: asyncActionCreator<number, TweetsState["tweets"]>(
    'DELETE_TWEET',
    (id: number) => new Promise(resolve => {
      deletePost(id)
        .then(() => createTweets())
        .then((tweets) => {
          resolve(tweets);
        });
    })
  ),
  updateTweet: asyncActionCreator<TweetState, TweetsState["tweets"]>(
    'UPDATE_TWEET',
    (tweet: TweetState) => new Promise(resolve => {
      updatePost(tweet)
        .then(() => createTweets())
        .then((tweets) => {
          resolve(tweets);
        });
    })
  ),
};
