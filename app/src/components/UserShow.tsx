import * as React from 'react';
import { size } from 'size';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { UserFormDialog } from './UserFormDialog';
import { getUser } from 'clients/users';
import { UserTweetList } from 'containers/UserTweetList';
import { UserImage } from './UserImage';

export type UserShowStateAsProps = {
  id: number;
};

export type UserShowDispatchAsProps = {
  edit: (text: string, file:File) => void;
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
  const { id, edit } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({id: 0, name: '', image_name: ''});
  React.useEffect(() => {
    const timeId = setInterval(() => getUser(id)
      .then((res) => res.json())
      .then((res) => {
        setUser(res.user);
      }), 1000);
    return () => {clearInterval(timeId)};
  }, [id, open]);

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
          avatar={<UserImage user={user} />}
          title={user.name}
        />
        <CardActions disableSpacing>
          <div style={{marginLeft: 'auto'}}>
            <IconButton aria-label="edit" color="primary" onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
            <UserFormDialog open={open} setOpen={setOpen} send={edit} params={dialogParams} />
          </div>
        </CardActions>
      </Card>
      <Divider />
      <UserTweetList userId={user.id} />
    </div>
  );
};
