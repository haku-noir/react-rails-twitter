import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { TweetsState } from 'reducers/tweetsReducer';
import { fetchPosts } from 'clients/posts';

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
          resolve(res.posts);
        })
    })
  )
};
