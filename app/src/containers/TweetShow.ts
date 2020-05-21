import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetShow as TweetShowComp, TweetShowStateAsProps, TweetShowDispatchAsProps } from 'components/TweetShow';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';

const mapStateToProps = (rootState: RootState): TweetShowStateAsProps => ({
  tweet: rootState.tweets.showTweet
});

const mapDispatchToProps = (dispatch: Dispatch): TweetShowDispatchAsProps => ({
  clickUser: (id: number) => {
    bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(id)
    .then(() => dispatch(push('/users/show')))
  }
});

export const TweetShow = connect(mapStateToProps, mapDispatchToProps)(TweetShowComp);
