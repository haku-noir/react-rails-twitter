import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetShow as TweetShowComp, TweetShowStateAsProps, TweetShowDispatchAsProps } from 'components/TweetShow';
import { RouteComponentProps } from 'react-router-dom';

const mapStateToProps = (rootState: RootState, ownProps: RouteComponentProps<{id: string}>): TweetShowStateAsProps => ({
  tweet: rootState.tweets.tweets[parseInt(ownProps.match.params.id) - 1]
});

const mapDispatchToProps = (dispatch: Dispatch): TweetShowDispatchAsProps => ({

});

export const TweetShow = connect(mapStateToProps, mapDispatchToProps)(TweetShowComp);
