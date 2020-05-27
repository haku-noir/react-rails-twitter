import * as React from 'react';
import { size } from 'size';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { UserImage } from './UserImage';
import { UserState, LoginUserState, isFollowerByUser } from 'reducers/usersReducer';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { blue, common } from '@material-ui/core/colors';

export type UserStateAsProps = {
  user: UserState;
  loginUser: LoginUserState;
};

export type UserDispatchAsProps = {
  clickUser: (id: number) => void;
  clickFollow: (user: UserState, follower: UserState) => void;
};

type IProps = UserStateAsProps & UserDispatchAsProps;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: size.width,
    },
  }),
);

export const User: React.FC<IProps> = (props: IProps) => {
  const { user, loginUser, clickUser, clickFollow } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => clickUser(user.id)}>
      <CardHeader
        avatar={<UserImage user={user} onClick={() => {}} />}
        title={user.name}
        action={loginUser.loggedin ? (
            isFollowerByUser(loginUser.user, user) ? (
              <IconButton
                onClick={() => clickFollow(user, loginUser.user)}
                color="inherit"
                style={{color: common.white, backgroundColor: blue[500]}}
              >
                <PersonAddIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => clickFollow(user, loginUser.user)}
                color="inherit"
              >
                <PersonAddIcon />
              </IconButton>
            )
        ) : (<div></div>)}
      />
    </Card>
  );
};
