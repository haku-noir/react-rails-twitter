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
    label: 'Name',
    button: 'OK',
    default: ownProps.user.name
  }
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {user: UserState}): UserEditButtonDispatchAsProps => ({
  edit: (text: string, file: File) => {
    const user: ImageUserState = {...ownProps.user, name: text, image: file};
    bindActionCreators(thunkToAction(usersActions.updateUser.action), dispatch)(user)
      .then(() => bindActionCreators(thunkToAction(tweetsActions.fetchTweets.action), dispatch)())
      .then(() => bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(user.id));
  }
});

export const UserEditButton = connect(mapStateToProps, mapDispatchToProps)(UserEditButtonComp);
