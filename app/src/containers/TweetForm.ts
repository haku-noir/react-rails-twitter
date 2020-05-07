import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetForm as TweetFormComp, TweetFormStateAsProps, TweetFormDispatchAsProps } from 'components/TweetForm';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';

const mapStateToProps = (rootState: RootState): TweetFormStateAsProps => ({
  ...rootState.tweets
});

const mapDispatchToProps = (dispatch: Dispatch): TweetFormDispatchAsProps =>
  bindActionCreators(
    {
      submit: thunkToAction(tweetsActions.addTweet.action)
    },
    dispatch
  );

export const TweetForm = connect(mapStateToProps, mapDispatchToProps)(TweetFormComp);
