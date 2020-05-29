import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { errorActions } from 'actions/errorActions';

export type ErrorState = {
  message: string;
};

const initialState: ErrorState = {
  message: '',
};

export const errorReducer = reducerWithInitialState(initialState)
  .case(errorActions.setError, (state: ErrorState, payload: ErrorState): ErrorState => (
    payload
  ))
  .case(errorActions.deleteError, (state: ErrorState): ErrorState => ({
    message: ''
  }));
