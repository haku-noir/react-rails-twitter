import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';
import { Success } from 'typescript-fsa';

export type TweetState = {
  id: number;
  content: string;
};

export type TweetsState = {
  tweets: Array<TweetState>;
};

const initialState: TweetsState = {
  tweets: [
    {id: 1, content: 'Hello'},
    {id: 2, content: 'World'}
  ],
};

export const tweetsReducer = reducerWithInitialState(initialState)
  .case(tweetsActions.updateTweets, (state: TweetsState, payload: TweetsState["tweets"]): TweetsState => ({
    ...state,
    tweets: payload,
  }))
  .case(tweetsActions.fetchTweets.async.done, (state: TweetsState, payload): TweetsState => ({
    ...state,
    tweets: payload.result
  }))
  .case(tweetsActions.addTweet.async.done, (state: TweetsState, payload): TweetsState => ({
    ...state,
    tweets: payload.result
  }));
