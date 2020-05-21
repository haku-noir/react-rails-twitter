import * as React from 'react';
import { size } from 'size';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { UserFormDialog } from './UserFormDialog';
import { UserTweetList } from 'containers/UserTweetList';
import { UserImage } from './UserImage';
import { UserState } from 'reducers/usersReducer';

export type UserShowStateAsProps = {
  user: UserState;
};

export type UserShowDispatchAsProps = {
  edit: (user: UserState, text: string, file:File) => void;
};

type IProps = UserShowStateAsProps & UserShowDispatchAsProps;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: size.width,
    },
  }),
);

export const UserShow: React.FC<IProps> = (props: IProps) => {
  const { user, edit } = props;
  const [open, setOpen] = React.useState(false);
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
            <IconButton aria-label="edit" color="primary" onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
            <UserFormDialog open={open} setOpen={setOpen} send={(text: string, file:File) => edit(user, text, file)} params={dialogParams} />
          </div>
        </CardActions>
      </Card>
      <Divider />
      <UserTweetList userId={user.id} />
    </div>
  );
};
