import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserShow as UserShowComp, UserShowStateAsProps, UserShowDispatchAsProps } from 'components/UserShow';
import { ImageUserState, UserState } from 'reducers/usersReducer';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';

const mapStateToProps = (rootState: RootState): UserShowStateAsProps => ({
  user: rootState.users.showUser
});

const mapDispatchToProps = (dispatch: Dispatch): UserShowDispatchAsProps => ({
  edit: (user: UserState, text: string, file: File) => {
    const editedUser: ImageUserState = {...user, name: text, image: file};
    bindActionCreators(thunkToAction(usersActions.updateUser.action), dispatch)(editedUser);
  }
});

export const UserShow = connect(mapStateToProps, mapDispatchToProps)(UserShowComp);
