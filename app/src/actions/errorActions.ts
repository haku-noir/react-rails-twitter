import actionCreatorFactory from 'typescript-fsa';
import { ErrorState } from 'reducers/errorReducer';

const actionCreator = actionCreatorFactory();

export const errorActions = {
  setError: actionCreator<ErrorState>('SET_ERROR'),
  deleteError: actionCreator<void>('DELETE_ERROR'),
};
