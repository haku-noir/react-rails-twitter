import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetList, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';

const mapStateToProps = (rootState: RootState): TweetListStateAsProps => ({
  ...rootState.tweets
});

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps => ({});

export const connectedTweetList = connect(mapStateToProps, mapDispatchToProps)(TweetList);
