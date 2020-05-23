import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetShow as TweetShowComp, TweetShowStateAsProps, TweetShowDispatchAsProps } from 'components/TweetShow';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';
import { UserState } from 'reducers/usersReducer';
import { TweetState } from 'reducers/tweetsReducer';
import { like, dislike } from 'clients/likes';
import { tweetsActions } from 'actions/tweetsActions';

const mapStateToProps = (rootState: RootState): TweetShowStateAsProps => ({
  tweet: rootState.tweets.showTweet,
  loginUser: rootState.users.loginUser
});

const mapDispatchToProps = (dispatch: Dispatch): TweetShowDispatchAsProps => ({
  clickUser: (id: number) => {
    bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(id)
    .then(() => dispatch(push('/users/show')))
  },
  clickLike: (user: UserState, tweet: TweetState) => {
    const change = tweet.like ? dislike : like;
    change(user.id, tweet.id)
    .then(() => bindActionCreators(thunkToAction(tweetsActions.fetchTweets.action), dispatch)())
    .then(() => bindActionCreators(thunkToAction(tweetsActions.setShowTweet.action), dispatch)(tweet.id))
  }
});

export const TweetShow = connect(mapStateToProps, mapDispatchToProps)(TweetShowComp);
