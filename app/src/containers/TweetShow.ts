import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetShow as TweetShowComp, TweetShowStateAsProps, TweetShowDispatchAsProps } from 'components/TweetShow';

const mapStateToProps = (rootState: RootState): TweetShowStateAsProps => ({
  ...rootState.tweets
});

const mapDispatchToProps = (dispatch: Dispatch): TweetShowDispatchAsProps => ({});

export const TweetShow = connect(mapStateToProps, mapDispatchToProps)(TweetShowComp);
