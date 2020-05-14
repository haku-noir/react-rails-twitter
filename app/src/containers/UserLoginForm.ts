import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserForm, UserFormStateAsProps, UserFormDispatchAsProps } from 'components/UserForm';

const mapStateToProps = (rootState: RootState): UserFormStateAsProps => ({
  params: {
    title: 'Login',
    buttonL: 'Register',
    buttonR: 'Login'
  }
});

const mapDispatchToProps = (dispatch: Dispatch): UserFormDispatchAsProps => ({});

export const UserLoginForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);
