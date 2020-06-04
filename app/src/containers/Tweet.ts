import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { Tweet as TweetComp, TweetStateAsProps, TweetDispatchAsProps } from 'components/Tweet';
import { TweetState } from 'reducers/tweetsReducer';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';
import { usersActions } from 'actions/usersActions';

const mapStateToProps = (rootState: RootState, ownProps: {tweet: TweetState}): TweetStateAsProps => ({
  tweet: ownProps.tweet,
});

const mapDispatchToProps = (dispatch: Dispatch): TweetDispatchAsProps => ({
  clickCard: (id: number) => {
    bindActionCreators(thunkToAction(tweetsActions.setShowTweet.action), dispatch)(id)
      .then(() => dispatch(push('/tweets/show')));
  },
  clickUser: (id: number) => {
    bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(id)
      .then(() => dispatch(push('/users/show')));
  },
});

export const Tweet = connect(mapStateToProps, mapDispatchToProps)(TweetComp);
