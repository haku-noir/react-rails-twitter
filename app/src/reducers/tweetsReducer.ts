import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';
import { UserState } from './usersReducer';

export type TweetState = {
  id: number;
  content: string;
  user?: UserState;
  time?: string;
  likes_count?: number;
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

export const findTweetsAtHome = (tweets: TweetState[], user: UserState): TweetState[] => (
  tweets.filter(tweet => tweet.user.id == user.id || user.following_users.find(following_user_id => following_user_id == tweet.user.id))
);

export const findTweetsByUserId = (tweets: TweetState[], user: UserState): TweetState[] => (
  tweets.filter(tweet => tweet.user.id == user.id)
);

export const findTweetsByUserLikes = (tweets: TweetState[], user: UserState): TweetState[] => (
  tweets.filter(tweet => user.likes.find(like => like == tweet.id))
);

export const findTweetsByUserFollowingUser = (tweets: TweetState[], user: UserState): TweetState[] => (
  tweets.filter(tweet => user.following_users.find(following_user_id => following_user_id == tweet.user.id)) || []
);

export const checkTweetByUserLikes = (tweet: TweetState, user: UserState): number => (
  user.likes.find(like => like == tweet.id)
);
