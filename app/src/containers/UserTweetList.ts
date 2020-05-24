import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetList, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';
import { findTweetsByUserId } from 'reducers/tweetsReducer';
import { UserState } from 'reducers/usersReducer';

const mapStateToProps = (rootState: RootState, ownProps: {user: UserState}): TweetListStateAsProps => ({
  tweets: findTweetsByUserId(rootState.tweets.tweets, ownProps.user)
});

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps => ({});

export const UserTweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList);
