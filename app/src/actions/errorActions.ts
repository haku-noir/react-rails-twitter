import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const errorActions = {
  setError: actionCreator<string>('SET_ERROR'),
  deleteError: actionCreator<void>('DELETE_ERROR'),
};
