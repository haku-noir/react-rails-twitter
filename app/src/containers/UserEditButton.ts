import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserEditButton as UserEditButtonComp, UserEditButtonStateAsProps, UserEditButtonDispatchAsProps } from 'components/UserEditButton';
import { UserState, ImageUserState } from 'reducers/usersReducer';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';
import { tweetsActions } from 'actions/tweetsActions';

const mapStateToProps = (rootState: RootState, ownProps: {user: UserState}): UserEditButtonStateAsProps => ({
  dialogParams: {
    title: 'Edit User',
    label1: 'Name',
    default1: ownProps.user.name,
    label2: 'Profile',
    default2: ownProps.user.profile,
    button: 'OK',
  },
  isVisible: rootState.users.loginUser.loggedin && (rootState.users.loginUser.user.id === ownProps.user.id),
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {user: UserState}): UserEditButtonDispatchAsProps => ({
  edit: (text: string, file: File, profile: string) => {
    const user: ImageUserState = {
      ...ownProps.user, name: text, image: file, profile,
    };
    bindActionCreators(thunkToAction(usersActions.updateUser.action), dispatch)(user)
      .then(() => bindActionCreators(thunkToAction(tweetsActions.fetchTweets.action), dispatch)())
      .then(() => bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(user.id));
  },
});

export const UserEditButton = connect(mapStateToProps, mapDispatchToProps)(UserEditButtonComp);
