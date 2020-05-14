import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserForm, UserFormStateAsProps, UserFormDispatchAsProps } from 'components/UserForm';
import { push } from 'connected-react-router';
import { loginUserActions } from 'actions/loginUserActions';

const mapStateToProps = (rootState: RootState): UserFormStateAsProps => ({
  params: {
    title: 'Register',
    buttonL: 'Login',
    buttonR: 'Register'
  }
});

const mapDispatchToProps = (dispatch: Dispatch): UserFormDispatchAsProps => ({
  clickL: () => dispatch(push('/users/login')),
  clickR: () => dispatch(loginUserActions.loginAction)
});

export const UserRegisterForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
