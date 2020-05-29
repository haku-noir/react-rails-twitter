import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { errorActions } from 'actions/errorActions';

export type ErrorState = {
  message: string;
  isError: boolean;
};

const initialState: ErrorState = {
  message: '',
  isError: false,
};

export const errorReducer = reducerWithInitialState(initialState)
  .case(errorActions.setError, (state: ErrorState, payload: string): ErrorState => ({
    message: payload,
    isError: true
  }))
  .case(errorActions.deleteError, (state: ErrorState): ErrorState => ({
    message: '',
    isError: false
  }));
