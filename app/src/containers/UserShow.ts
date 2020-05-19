import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserShow as UserShowComp, UserShowStateAsProps, UserShowDispatchAsProps } from 'components/UserShow';
import { RouteComponentProps } from 'react-router-dom';
import { ImageUserState } from 'reducers/loginUserReducer';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { loginUserActions } from 'actions/loginUserActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState, ownProps: RouteComponentProps<{id: string}>): UserShowStateAsProps => ({
  id: parseInt(ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouteComponentProps<{id: string}>): UserShowDispatchAsProps => ({
  edit: (text: string, file: File) => {
    const user: ImageUserState = {id: parseInt(ownProps.match.params.id), name: text, image: file};
    bindActionCreators(thunkToAction(loginUserActions.updateUser.action), dispatch)(user);
    dispatch(push(`/users/${user.id}`));
  }
});

export const UserShow = connect(mapStateToProps, mapDispatchToProps)(UserShowComp);
