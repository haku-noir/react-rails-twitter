import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';
import { UserState } from './loginUserReducer';

export type TweetState = {
  id: number;
  content: string;
  user?: UserState;
};

export type TweetsState = {
  tweets: TweetState[];
};

const initialState: TweetsState = {
  tweets: [],
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
  }))
  .case(tweetsActions.deleteTweet.async.done, (state: TweetsState, payload): TweetsState => ({
    ...state,
    tweets: payload.result
  }))
  .case(tweetsActions.updateTweet.async.done, (state: TweetsState, payload): TweetsState => ({
    ...state,
    tweets: payload.result
  }));

export const findTweetById = (tweets: TweetState[], id: number): TweetState => (
  tweets.find(tweet => tweet.id == id)
);
