import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { UserShow as UserShowComp, UserShowStateAsProps, UserShowDispatchAsProps } from 'components/UserShow';
import { RouteComponentProps } from 'react-router-dom';

const mapStateToProps = (rootState: RootState, ownProps: RouteComponentProps<{id: string}>): UserShowStateAsProps => ({
  id: parseInt(ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch: Dispatch): UserShowDispatchAsProps => ({});

export const UserShow = connect(mapStateToProps, mapDispatchToProps)(UserShowComp);
