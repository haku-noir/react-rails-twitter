import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { EditButton, EditButtonStateAsProps, EditButtonDispatchAsProps } from 'components/EditButton';
import { TweetState } from 'reducers/tweetsReducer';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { tweetsActions } from 'actions/tweetsActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState, ownProps: {tweet: TweetState}): EditButtonStateAsProps => ({
  dialogParams: {
    title: 'Edit Tweet',
    label: 'Tweet',
    button: 'OK',
    default: ownProps.tweet.content
  }
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {tweet: TweetState}): EditButtonDispatchAsProps => ({
  edit: (text: string) => {
    const tweet: TweetState = {...ownProps.tweet, content: text};
    bindActionCreators(thunkToAction(tweetsActions.updateTweet.action), dispatch)(tweet);
    dispatch(push(`/tweets/${tweet.id}`));
  }
});

export const TweetEditButton = connect(mapStateToProps, mapDispatchToProps)(EditButton);