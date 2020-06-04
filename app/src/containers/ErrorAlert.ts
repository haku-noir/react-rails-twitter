import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { ErrorAlert as ErrorAlertComp, ErrorAlertStateAsProps, ErrorAlertDispatchAsProps } from 'components/ErrorAlert';
import { errorActions } from 'actions/errorActions';

const mapStateToProps = (rootState: RootState): ErrorAlertStateAsProps => ({
  error: rootState.error,
});

const mapDispatchToProps = (dispatch: Dispatch): ErrorAlertDispatchAsProps => ({
  clickClose: () => dispatch(errorActions.deleteError),
});

export const ErrorAlert = connect(mapStateToProps, mapDispatchToProps)(ErrorAlertComp);
