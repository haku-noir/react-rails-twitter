import * as React from 'react';
import { size } from 'size';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { getUser } from 'clients/users';
import { UserTweetList } from 'containers/UserTweetList';

export type UserShowStateAsProps = {
  id: number;
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
  const { id } = props;
  const classes = useStyles();

  const [user, serUser] = React.useState({id: 0, name: ''});
  React.useEffect(() => {
    let unmounted = false;
    if(!unmounted){
      getUser(id)
        .then((res) => res.json())
        .then((res) => {
          serUser(res.data);
        });
    }
    return () => {unmounted = true};
  }, [id]);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Anonymous" src="" />
          }
          title={user.name}
        />
      </Card>
      <Divider />
      <UserTweetList userId={user.id} />
    </div>
  );
};
