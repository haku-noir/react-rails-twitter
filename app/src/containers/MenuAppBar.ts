import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { MenuAppBar as MenuAppBarComp, MenuAppBarStateAsProps, MenuAppBarDispatchAsProps } from 'components/MenuAppBar';

const mapStateToProps = (rootState: RootState): MenuAppBarStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): MenuAppBarDispatchAsProps => ({});

export const MenuAppBar = connect(mapStateToProps, mapDispatchToProps)(MenuAppBarComp);
