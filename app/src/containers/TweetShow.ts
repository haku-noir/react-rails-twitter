import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetShow as TweetShowComp, TweetShowStateAsProps, TweetShowDispatchAsProps } from 'components/TweetShow';
import { RouteComponentProps } from 'react-router-dom';
import { findTweetById } from 'reducers/tweetsReducer';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';

const mapStateToProps = (rootState: RootState, ownProps: RouteComponentProps<{id: string}>): TweetShowStateAsProps => ({
  tweet: findTweetById(rootState.tweets.tweets, parseInt(ownProps.match.params.id))
});

const mapDispatchToProps = (dispatch: Dispatch): TweetShowDispatchAsProps => ({
  clickUser: (id: number) => {
    bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(id)
    .then(() => dispatch(push('/users/show')))
  }
});

export const TweetShow = connect(mapStateToProps, mapDispatchToProps)(TweetShowComp);
