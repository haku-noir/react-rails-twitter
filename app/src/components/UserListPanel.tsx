import * as React from 'react';
import { size } from 'size';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { fetchUsers } from 'clients/users';
import { UserList } from './UserList';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: size.width,
    marginBottom: 5,
  },
}));

export const UserListPanel: React.FC<void> = () => {
  const classes = useStyles();

  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users);
      });
  }, []);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title="User List"
        />
      </Card>
      <UserList users={users} />
    </div>
  );
};
