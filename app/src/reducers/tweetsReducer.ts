import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';
import { UserState } from './usersReducer';

export type TweetState = {
  id: number;
  content: string;
  user?: UserState;
  time?: string;
  like?: boolean;
};

export type TweetsState = {
  tweets: TweetState[];
  showTweet: TweetState | null;
};

const initialState: TweetsState = {
  tweets: [],
  showTweet: null
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
  }))
  .case(tweetsActions.setShowTweet.async.done, (state: TweetsState, payload): TweetsState => ({
    ...state,
    showTweet: payload.result
  }));

export const findTweetsByUserId = (tweets: TweetState[], user: UserState): TweetState[] => (
  tweets.filter(tweet => tweet.user.id == user.id)
);

export const findTweetsByUserLikes = (tweets: TweetState[], user: UserState): TweetState[] => (
  tweets.filter(tweet => user.likes.find(like => like == tweet.id))
);

export const checkTweetByUserLikes = (tweet: TweetState, user: UserState): number => (
  user.likes.find(like => like == tweet.id)
);
