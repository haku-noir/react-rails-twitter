import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const tweetsActions = {
  updateTweets: actionCreator<any>('UPDATE_TWEETS'),
};
