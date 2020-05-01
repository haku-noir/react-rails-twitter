import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { tweetsActions } from 'actions/tweetsActions';

export type TweetsState = {
  sample: any
};

const initialState: TweetsState = {
  sample: Object,
};

export const tweetsReducer = reducerWithInitialState(initialState)
  .case(tweetsActions.sampleAction, (state: TweetsState, payload: any): TweetsState => ({
    ...state,
    sample: payload,
  }));
