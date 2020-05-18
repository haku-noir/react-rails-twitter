import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { thunkToAction } from "typescript-fsa-redux-thunk";
import { RootState } from 'store';
import { TweetList as TweetListComp, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';
import { tweetsActions } from 'actions/tweetsActions';
import { findTweetsByUserId } from 'reducers/tweetsReducer';

const mapStateToProps = (rootState: RootState, ownProps: {userId: number}): TweetListStateAsProps => ({
  tweets: findTweetsByUserId(rootState.tweets.tweets, ownProps.userId)
});

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps => ({
  repeat: bindActionCreators(thunkToAction(tweetsActions.fetchTweets.action), dispatch)
});

export const UserTweetList = connect(mapStateToProps, mapDispatchToProps)(TweetListComp);
