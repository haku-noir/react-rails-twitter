import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { DeleteButton, DeleteButtonStateAsProps, DeleteButtonDispatchAsProps } from 'components/DeleteButton';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState): DeleteButtonStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DeleteButtonDispatchAsProps => ({
  destroy: (id: number) => {
    bindActionCreators(thunkToAction(tweetsActions.deleteTweet.action), dispatch)(id)
    dispatch(push('/'));
  }
});

export const TweetDeleteButton = connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
