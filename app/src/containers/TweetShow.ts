import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetShow as TweetShowComp, TweetShowStateAsProps, TweetShowDispatchAsProps } from 'components/TweetShow';
import { RouteComponentProps } from 'react-router-dom';
import { findTweetById } from 'reducers/tweetsReducer';

const mapStateToProps = (rootState: RootState, ownProps: RouteComponentProps<{id: string}>): TweetShowStateAsProps => ({
  tweet: findTweetById(rootState.tweets.tweets, parseInt(ownProps.match.params.id))
});

const mapDispatchToProps = (dispatch: Dispatch): TweetShowDispatchAsProps => ({

});

export const TweetShow = connect(mapStateToProps, mapDispatchToProps)(TweetShowComp);
