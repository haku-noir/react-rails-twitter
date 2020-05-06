import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { thunkToAction } from "typescript-fsa-redux-thunk";
import { RootState } from 'store';
import { TweetList as TweetListComp, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';
import { tweetsActions } from 'actions/tweetsActions';

const mapStateToProps = (rootState: RootState): TweetListStateAsProps => ({
  ...rootState.tweets
});

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps =>
  bindActionCreators(
    {
      repeat: thunkToAction(tweetsActions.fetchTweets.action)
    },
    dispatch
  );

export const TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetListComp);
