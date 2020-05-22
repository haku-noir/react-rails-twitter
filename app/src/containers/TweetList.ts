import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetList as TweetListComp, TweetListStateAsProps, TweetListDispatchAsProps } from 'components/TweetList';

const mapStateToProps = (rootState: RootState): TweetListStateAsProps => ({
  tweets: rootState.tweets.tweets
});

const mapDispatchToProps = (dispatch: Dispatch): TweetListDispatchAsProps => ({});

export const TweetList = connect(mapStateToProps, mapDispatchToProps)(TweetListComp);
