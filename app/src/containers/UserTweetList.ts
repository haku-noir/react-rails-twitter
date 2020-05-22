import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetList, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';
import { findTweetsByUserId } from 'reducers/tweetsReducer';

const mapStateToProps = (rootState: RootState, ownProps: {userId: number}): TweetListStateAsProps => ({
  tweets: findTweetsByUserId(rootState.tweets.tweets, ownProps.userId)
});

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps => ({});

export const UserTweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList);
