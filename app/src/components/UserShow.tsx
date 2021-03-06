import * as React from 'react';
import { size } from 'size';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { UserState, LoginUserState, isFollowerByUser } from 'reducers/usersReducer';
import { UserEditButton } from 'containers/UserEditButton';
import { blue } from '@material-ui/core/colors';
import { UserTabs } from './UserTabs';
import { UserImage } from './UserImage';

export type UserShowStateAsProps = {
  user: UserState;
  loginUser: LoginUserState;
};

export type UserShowDispatchAsProps = {
  clickFollow: (user: UserState, follower: UserState) => void;
};

type IProps = UserShowStateAsProps & UserShowDispatchAsProps;

const useStyles = makeStyles(() => createStyles({
  root: {
    width: size.width,
  },
}));

export const UserShow: React.FC<IProps> = (props: IProps) => {
  const { user, loginUser, clickFollow } = props;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<UserImage user={user} onClick={() => {}} />}
          title={user.name}
          subheader={user.email}
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {user.profile}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {loginUser.loggedin ? (
            <div>
              {isFollowerByUser(loginUser.user, user) ? (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => clickFollow(user, loginUser.user)}
                  color="inherit"
                  style={{ backgroundColor: blue[500] }}
                >
                  Following
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => clickFollow(user, loginUser.user)}
                  color="primary"
                >
                  Follow
                </Button>
              )}
            </div>
          ) : (<div />)}
          <div style={{ marginLeft: 'auto' }}>
            <UserEditButton user={user} />
          </div>
        </CardActions>
      </Card>
      <Divider />
      <UserTabs user={user} />
    </div>
  );
};
