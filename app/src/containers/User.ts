import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { User as UserComp, UserStateAsProps, UserDispatchAsProps } from 'components/User';
import { UserState, isFollowerByUser } from 'reducers/usersReducer';
import { follow, unfollow } from 'clients/follows';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState, ownProps: {user: UserState}): UserStateAsProps => ({
  user: ownProps.user,
  loginUser: rootState.users.loginUser
});

const mapDispatchToProps = (dispatch: Dispatch): UserDispatchAsProps => ({
  clickUser: (id: number) => {
    bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(id)
    .then(() => dispatch(push('/users/show')))
  },
  clickFollow: (user: UserState, follower: UserState) => {
    const change = isFollowerByUser(follower, user) ? unfollow : follow;
    change(follower.id, user.id)
    .then(() => bindActionCreators(thunkToAction(usersActions.setSessionUser.action), dispatch)())
    .then(() => bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(user.id))
  }
});

export const User = connect(mapStateToProps, mapDispatchToProps)(UserComp);
