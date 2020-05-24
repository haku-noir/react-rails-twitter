import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetList, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';
import { findTweetsByUserLikes } from 'reducers/tweetsReducer';
import { UserState } from 'reducers/usersReducer';

const mapStateToProps = (rootState: RootState, ownProps: {user: UserState}): TweetListStateAsProps => ({
  tweets: findTweetsByUserLikes(rootState.tweets.tweets, ownProps.user.likes)
});

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps => ({});

export const UserLikeList = connect(mapStateToProps, mapDispatchToProps)(TweetList);
