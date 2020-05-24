import * as React from 'react';
import { size } from 'size';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import { UserImage } from './UserImage';
import { UserState } from 'reducers/usersReducer';
import { UserEditButton } from 'containers/UserEditButton';
import { UserTabs } from './UserTabs';

export type UserShowStateAsProps = {
  user: UserState;
};

export type UserShowDispatchAsProps = {};

type IProps = UserShowStateAsProps & UserShowDispatchAsProps;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: size.width,
    },
  }),
);

export const UserShow: React.FC<IProps> = (props: IProps) => {
  const { user } = props;
  const classes = useStyles();

  const dialogParams = {
    title: 'Edit User',
    label: 'Name',
    button: 'OK',
    default: user.name
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<UserImage user={user} onClick={() => {}} />}
          title={user.name}
        />
        <CardActions disableSpacing>
          <div style={{marginLeft: 'auto'}}>
            <UserEditButton user={user} />
          </div>
        </CardActions>
      </Card>
      <Divider />
      <UserTabs user={user} />
    </div>
  );
};
