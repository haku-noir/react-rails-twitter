import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const tweetsActions = {
  sampleAction: actionCreator<any>('SAMPLE'),
};
