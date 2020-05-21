import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserShow as UserShowComp, UserShowStateAsProps, UserShowDispatchAsProps } from 'components/UserShow';
import { RouteComponentProps } from 'react-router-dom';
import { ImageUserState } from 'reducers/usersReducer';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState): UserShowStateAsProps => ({
  user: rootState.users.showUser
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteComponentProps<{id: string}>): UserShowDispatchAsProps => ({
  edit: (text: string, file: File) => {
    const user: ImageUserState = {id: parseInt(ownProps.match.params.id), name: text, image_name: '', image: file};
    bindActionCreators(thunkToAction(usersActions.updateUser.action), dispatch)(user);
    dispatch(push(`/users/${user.id}`));
  }
});

export const UserShow = connect(mapStateToProps, mapDispatchToProps)(UserShowComp);
