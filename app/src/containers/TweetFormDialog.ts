import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { TweetFormDialog as TweetFormDialogComp, TweetFormDialogStateAsProps, TweetFormDialogDispatchAsProps } from 'components/TweetFormDialog';

const mapStateToProps = (rootState: RootState): TweetFormDialogStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): TweetFormDialogDispatchAsProps => ({});

export const TweetFormDialog = connect(mapStateToProps, mapDispatchToProps)(TweetFormDialogComp);
