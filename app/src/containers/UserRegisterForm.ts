import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserForm, UserFormStateAsProps, UserFormDispatchAsProps } from 'components/UserForm';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';
import { errorActions } from 'actions/errorActions';

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
      email: '',
      image_name: 'default_user.jpg',
      profile: '',
      password
    })
    .then((payload) => {
      if(payload !== undefined){
        bindActionCreators(thunkToAction(usersActions.setSessionUser.action), dispatch)()
        .then(() => dispatch(push('/')));
      }else{
        dispatch(errorActions.setError('Register failed'))
      }
    });
  }
});

export const UserRegisterForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
