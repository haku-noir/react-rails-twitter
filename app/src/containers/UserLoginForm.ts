import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserLoginForm as UserLoginFormComp, UserLoginFormStateAsProps, UserLoginFormDispatchAsProps } from 'components/UserLoginForm';
import { push } from 'connected-react-router';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import { usersActions } from 'actions/usersActions';
import { errorActions } from 'actions/errorActions';

const mapStateToProps = (rootState: RootState): UserLoginFormStateAsProps => ({
  params: {
    title: 'Login',
    buttonL: 'Register',
    buttonR: 'Login'
  }
});

const mapDispatchToProps = (dispatch: Dispatch): UserLoginFormDispatchAsProps => ({
  clickL: () => dispatch(push('/users/register')),
  clickR: (email: string, password: string) => {
    bindActionCreators(thunkToAction(usersActions.login.action), dispatch)({
      id: 0,
      name: '',
      email: email,
      image_name: '',
      profile: '',
      password
    })
      .then((payload) => {
        console.log(payload)
        if(payload !== undefined){
          bindActionCreators(thunkToAction(usersActions.setSessionUser.action), dispatch)()
            .then(() => dispatch(push('/')));
        }else{
          dispatch(errorActions.setError('Login failed'))
        }
      })
  }
});

export const UserLoginForm = connect(mapStateToProps, mapDispatchToProps)(UserLoginFormComp);
