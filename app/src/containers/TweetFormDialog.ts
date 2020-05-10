import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetFormDialog as TweetFormDialogComp, TweetFormDialogStateAsProps, TweetFormDialogDispatchAsProps } from 'components/TweetFormDialog';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';

const mapStateToProps = (rootState: RootState): TweetFormDialogStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): TweetFormDialogDispatchAsProps => ({
  send: bindActionCreators(thunkToAction(tweetsActions.addTweet.action), dispatch)
});

export const TweetFormDialog = connect(mapStateToProps, mapDispatchToProps)(TweetFormDialogComp);
