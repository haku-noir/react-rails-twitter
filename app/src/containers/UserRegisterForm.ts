import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserForm, UserFormStateAsProps, UserFormDispatchAsProps } from 'components/UserForm';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';

const mapStateToProps = (rootState: RootState): UserFormStateAsProps => ({
  params: {
    title: 'Register',
    buttonL: 'Login',
    buttonR: 'Register'
  }
});

const mapDispatchToProps = (dispatch: Dispatch): UserFormDispatchAsProps => ({
  clickL: () => dispatch(push('/users/login')),
  clickR: (user: string, password: string) => {
    bindActionCreators(thunkToAction(usersActions.addUser.action), dispatch)({
      id: 0,
      name: user,
      image_name: 'default_user.jpg',
      profile: '',
      password
    })
    .then((payload) => {
      if(payload !== undefined) dispatch(push('/'));
    });
  }
});

export const UserRegisterForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
