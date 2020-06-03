import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { SendButton, SendButtonStateAsProps, SendButtonDispatchAsProps } from 'components/SendButton';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';
import { errorActions } from 'actions/errorActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState): SendButtonStateAsProps => ({
  dialogParams: {
    title: 'Send Tweet',
    label: 'Tweet',
    button: 'Send',
    default: ''
  },
  isVisible: rootState.users.loginUser.loggedin
});

const mapDispatchToProps = (dispatch: Dispatch): SendButtonDispatchAsProps => ({
  send: (text: string) => {
    if(!text){
      dispatch(errorActions.setError('Tweet is empty'))
    }else if(text.length > 140){
      dispatch(errorActions.setError('Tweet is over 140 characters'))
    }else{
      bindActionCreators(thunkToAction(tweetsActions.addTweet.action), dispatch)({
        id: 0,
        content: text
      })
        .then(() => dispatch(push('/')));
    }
  }
});

export const TweetSendButton = connect(mapStateToProps, mapDispatchToProps)(SendButton);
