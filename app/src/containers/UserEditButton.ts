import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserEditButton as UserEditButtonComp, UserEditButtonStateAsProps, UserEditButtonDispatchAsProps } from 'components/UserEditButton';
import { UserState, ImageUserState } from 'reducers/loginUserReducer';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { loginUserActions } from 'actions/loginUserActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState, ownProps: {user: UserState}): UserEditButtonStateAsProps => ({
  dialogParams: {
    title: 'Edit User',
    label: 'Name',
    button: 'OK',
    default: ownProps.user.name
  }
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {user: UserState}): UserEditButtonDispatchAsProps => ({
  edit: (text: string, file: File) => {
    const user: ImageUserState = {...ownProps.user, name: text, image: file};
    bindActionCreators(thunkToAction(loginUserActions.updateUser.action), dispatch)(user);
    dispatch(push(`/users/${user.id}`));
  }
});

export const UserEditButton = connect(mapStateToProps, mapDispatchToProps)(UserEditButtonComp);
