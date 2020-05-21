import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { MenuAppBar as MenuAppBarComp, MenuAppBarStateAsProps, MenuAppBarDispatchAsProps } from 'components/MenuAppBar';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';

const mapStateToProps = (rootState: RootState): MenuAppBarStateAsProps => (
  rootState.users.loginUser
);

const mapDispatchToProps = (dispatch: Dispatch): MenuAppBarDispatchAsProps => ({
  clickHome: () => dispatch(push('/')),
  clickLogin: () => dispatch(push('/users/login')),
  clickLogout: bindActionCreators(thunkToAction(usersActions.logout.action), dispatch),
  clickProfile: (id: number) => {
    bindActionCreators(thunkToAction(usersActions.setShowUser.action), dispatch)(id)
    .then(() => dispatch(push('/users/show')))
  }
});

export const MenuAppBar = connect(mapStateToProps, mapDispatchToProps)(MenuAppBarComp);
