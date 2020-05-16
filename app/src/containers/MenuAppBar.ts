import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { MenuAppBar as MenuAppBarComp, MenuAppBarStateAsProps, MenuAppBarDispatchAsProps } from 'components/MenuAppBar';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { loginUserActions } from 'actions/loginUserActions';

const mapStateToProps = (rootState: RootState): MenuAppBarStateAsProps => (
  rootState.loginUser
);

const mapDispatchToProps = (dispatch: Dispatch): MenuAppBarDispatchAsProps => ({
  clickLogin: () => dispatch(push('/users/login')),
  clickLogout: bindActionCreators(thunkToAction(loginUserActions.logout.action), dispatch),
  clickProfile: (id: number) => dispatch(push(`/users/${id}`))
});

export const MenuAppBar = connect(mapStateToProps, mapDispatchToProps)(MenuAppBarComp);
