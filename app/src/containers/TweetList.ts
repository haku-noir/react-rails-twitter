import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetList as TweetListComp, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';
import { findTweetsByUserFollowingUser } from 'reducers/tweetsReducer';

const mapStateToProps = (rootState: RootState): TweetListStateAsProps => {
  const tweets = rootState.tweets.tweets;
  const loginUser = rootState.users.loginUser;

  return {
    tweets: loginUser.loggedin ?
              findTweetsByUserFollowingUser(tweets, loginUser.user) :
              tweets
  };
};

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps => ({});

export const TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetListComp);
