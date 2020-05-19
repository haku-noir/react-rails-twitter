import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { Tweet as TweetComp, TweetStateAsProps, TweetDispatchAsProps } from 'components/Tweet';
import { TweetState } from 'reducers/tweetsReducer';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState, ownProps: {tweet: TweetState}): TweetStateAsProps => ({
  tweet: ownProps.tweet
});

const mapDispatchToProps = (dispatch: Dispatch): TweetDispatchAsProps => ({
  clickCard: (id: number) => dispatch(push(`/tweets/${id}`)),
  clickUser: (id: number) => dispatch(push(`/users/${id}`))
});

export const Tweet = connect(mapStateToProps, mapDispatchToProps)(TweetComp);
