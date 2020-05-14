import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserLoginForm as UserLoginFormComp, UserLoginFormStateAsProps, UserLoginFormDispatchAsProps } from 'components/UserLoginForm';

const mapStateToProps = (rootState: RootState): UserLoginFormStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): UserLoginFormDispatchAsProps => ({});

export const UserLoginForm = connect(mapStateToProps, mapDispatchToProps)(UserLoginFormComp);
