import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { SendButton, SendButtonStateAsProps, SendButtonDispatchAsProps } from 'components/SendButton';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';

const mapStateToProps = (rootState: RootState): SendButtonStateAsProps => ({
  dialogParams: {
    title: 'Send Tweet',
    label: 'Tweet',
    button: 'Send',
    default: ''
  }
});

const mapDispatchToProps = (dispatch: Dispatch): SendButtonDispatchAsProps => ({
  send: (text: string) => {
    bindActionCreators(thunkToAction(tweetsActions.addTweet.action), dispatch)({
      id: 0,
      content: text
    });
  }
});

export const TweetSendButton = connect(mapStateToProps, mapDispatchToProps)(SendButton);
