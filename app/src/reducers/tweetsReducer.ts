import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';

export type TweetState = {
  id: Number;
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
  }));
