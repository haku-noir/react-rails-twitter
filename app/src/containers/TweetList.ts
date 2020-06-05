import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetList as TweetListComp, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';
import { findTweetsAtHome } from 'reducers/tweetsReducer';

const mapStateToProps = (rootState: RootState): TweetListStateAsProps => {
  const { tweets } = rootState.tweets;
  const { loginUser } = rootState.users;

  return {
    tweets: loginUser.loggedin
      ? findTweetsAtHome(tweets, loginUser.user)
      : tweets,
  };
};

const mapDispatchToProps = (): TweetListDispatchAsProps => ({});

export const TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetListComp);
