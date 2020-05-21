import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserShow as UserShowComp, UserShowStateAsProps, UserShowDispatchAsProps } from 'components/UserShow';

const mapStateToProps = (rootState: RootState): UserShowStateAsProps => ({
  user: rootState.users.showUser
});

const mapDispatchToProps = (dispatch: Dispatch): UserShowDispatchAsProps => ({});

export const UserShow = connect(mapStateToProps, mapDispatchToProps)(UserShowComp);
