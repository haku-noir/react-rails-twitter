import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { DeleteButton, DeleteButtonStateAsProps, DeleteButtonDispatchAsProps } from 'components/DeleteButton';
import { TweetState } from 'reducers/tweetsReducer';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState, ownProps: {tweet: TweetState}): DeleteButtonStateAsProps => ({
  isVisible: rootState.users.loginUser.loggedin && (rootState.users.loginUser.user.id == ownProps.tweet.user.id)
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {tweet: TweetState}): DeleteButtonDispatchAsProps => ({
  destroy: () => {
    bindActionCreators(thunkToAction(tweetsActions.deleteTweet.action), dispatch)(ownProps.tweet.id)
      .then(() => dispatch(push('/')))
  }
});

export const TweetDeleteButton = connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
