import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { Tweet, TweetStateAsProps, TweetDispatchAsProps } from 'components/Tweet';

const mapStateToProps = (rootState: RootState): TweetStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): TweetDispatchAsProps => ({});

export const connectedTweet = connect(mapStateToProps, mapDispatchToProps)(Tweet);
