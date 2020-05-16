import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { MenuAppBar as MenuAppBarComp, MenuAppBarStateAsProps, MenuAppBarDispatchAsProps } from 'components/MenuAppBar';
import { push } from 'connected-react-router';

const mapStateToProps = (rootState: RootState): MenuAppBarStateAsProps => (
  rootState.loginUser
);

const mapDispatchToProps = (dispatch: Dispatch): MenuAppBarDispatchAsProps => ({
  clickLogin: () => dispatch(push('/users/login')),
  clickLogout: () => {},
  clickProfile: (id: number) => dispatch(push(`/users/${id}`))
});

export const MenuAppBar = connect(mapStateToProps, mapDispatchToProps)(MenuAppBarComp);
