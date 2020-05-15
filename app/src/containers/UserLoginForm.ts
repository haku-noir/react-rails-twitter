import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserForm, UserFormStateAsProps, UserFormDispatchAsProps } from 'components/UserForm';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
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
  clickR: (user: string, password: string) => {
    bindActionCreators(thunkToAction(loginUserActions.login.action), dispatch)({
      id: 0,
      name: user,
      password
    });
  }
});

export const UserLoginForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
