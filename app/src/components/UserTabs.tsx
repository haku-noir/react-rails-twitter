import * as React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { UserState, findFollower, findFollowingUser } from 'reducers/usersReducer';
import { UserTweetList } from 'containers/UserTweetList';
import { UserLikeList } from 'containers/UserLikeList';
import { fetchUsers } from 'clients/users';
import { UserList } from './UserList';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

type IProps = {
  user: UserState;
}

export const UserTabs = (props: IProps) => {
  const { user } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users);
      })
  }, [user]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Tweet" {...a11yProps(0)} />
          <Tab label="Like" {...a11yProps(1)} />
          <Tab label="Follower" {...a11yProps(2)} />
          <Tab label="Followeing User" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <UserTweetList user ={user} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <UserLikeList user={user} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <UserList users={findFollower(users, user)} />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <UserList users={findFollowingUser(users, user)} />
      </TabPanel>
    </div>
  );
}
