import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserForm, UserFormStateAsProps, UserFormDispatchAsProps } from 'components/UserForm';
import { push } from 'connected-react-router';
import { loginUserActions } from 'actions/loginUserActions';

const mapStateToProps = (rootState: RootState): UserFormStateAsProps => ({
  params: {
    title: 'Login',
    buttonL: 'Register',
    buttonR: 'Login'
  }
});

const mapDispatchToProps = (dispatch: Dispatch): UserFormDispatchAsProps => ({
  clickL: () => dispatch(push('/users/register')),
  clickR: () => dispatch(loginUserActions.loginAction)
});

export const UserLoginForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
