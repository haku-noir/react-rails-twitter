import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserRegisterForm as UserRegisterFormComp, UserRegisterFormStateAsProps, UserRegisterFormDispatchAsProps } from 'components/UserRegisterForm';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';
import { errorActions } from 'actions/errorActions';

const mapStateToProps = (): UserRegisterFormStateAsProps => ({
  params: {
    title: 'Register',
    buttonL: 'Login',
    buttonR: 'Register',
  },
});

const mapDispatchToProps = (dispatch: Dispatch): UserRegisterFormDispatchAsProps => ({
  clickL: () => dispatch(push('/users/login')),
  clickR: (name: string, email: string, password: string) => {
    bindActionCreators(thunkToAction(usersActions.addUser.action), dispatch)({
      id: 0,
      name,
      email,
      image_name: 'default_user.jpg',
      profile: '',
      password,
    })
      .then((payload) => {
        if (payload !== undefined) {
          bindActionCreators(thunkToAction(usersActions.setSessionUser.action), dispatch)()
            .then(() => dispatch(push('/')));
        } else {
          dispatch(errorActions.setError('Register failed'));
        }
      });
  },
});

export const UserRegisterForm = connect(mapStateToProps, mapDispatchToProps)(UserRegisterFormComp);
