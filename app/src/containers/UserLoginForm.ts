import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserForm, UserFormStateAsProps, UserFormDispatchAsProps } from 'components/UserForm';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';

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
    bindActionCreators(thunkToAction(usersActions.login.action), dispatch)({
      id: 0,
      name: user,
      image_name: '',
      password
    })
    .then((payload) => {
      if(payload !== undefined) dispatch(push('/'));
    });
  }
});

export const UserLoginForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
