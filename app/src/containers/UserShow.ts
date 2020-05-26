import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserShow as UserShowComp, UserShowStateAsProps, UserShowDispatchAsProps } from 'components/UserShow';
import { UserState, isFollowerByUser } from 'reducers/usersReducer';
import { follow, unfollow } from 'clients/follows';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';

const mapStateToProps = (rootState: RootState): UserShowStateAsProps => ({
  user: rootState.users.showUser,
  loginUser: rootState.users.loginUser
});

const mapDispatchToProps = (dispatch: Dispatch): UserShowDispatchAsProps => ({
  clickFollow: (user: UserState, follower: UserState) => {
    const change = isFollowerByUser(follower, user) ? unfollow : follow;
    change(follower.id, user.id)
    .then(() => bindActionCreators(thunkToAction(usersActions.setSessionUser.action), dispatch)())
    .then(() => bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(user.id))
  }
});

export const UserShow = connect(mapStateToProps, mapDispatchToProps)(UserShowComp);
