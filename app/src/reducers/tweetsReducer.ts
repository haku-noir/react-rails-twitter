import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';

export type TweetsState = {
  tweets: Array<string>;
};

const initialState: TweetsState = {
  tweets: ['Hello', 'World'],
};

export const tweetsReducer = reducerWithInitialState(initialState)
  .case(tweetsActions.sampleAction, (state: TweetsState, payload: any): TweetsState => ({
    ...state,
    tweets: payload,
  }));
