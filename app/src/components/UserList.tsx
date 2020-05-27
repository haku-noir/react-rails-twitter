import * as React from 'react';
import { size } from 'size';
import { UserState } from 'reducers/usersReducer';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { User } from 'containers/User';

type IProps = {
  users: UserState[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: size.width,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export const UserList: React.FC<IProps> = (props: IProps) => {
  const { users } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {users.map(user => (
          <ListItem key={user.id} alignItems="flex-start">
            <User user={user} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
