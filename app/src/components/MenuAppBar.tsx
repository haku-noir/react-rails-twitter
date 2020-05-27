import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { LoginUserState } from 'reducers/usersReducer';
import { UserImage } from './UserImage';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    button: {
      marginRight: 10,
    }
  }),
);

export type MenuAppBarStateAsProps = LoginUserState;

export type MenuAppBarDispatchAsProps = {
  clickHome: () => void;
  clickUserList: () => void;
  clickLogin: () => void;
  clickLogout: () => void;
  clickProfile: (id: number) => void;
  repeat: () => void;
};

type IProps = MenuAppBarStateAsProps & MenuAppBarDispatchAsProps;

export const MenuAppBar: React.FC<IProps> = (props: IProps) => {
  const { user, loggedin, clickHome, clickUserList, clickLogin, clickLogout, clickProfile, repeat } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  React.useEffect(() => {
    const timeId = setTimeout(() => repeat(), 5000);
    return () => {clearTimeout(timeId)}
  });

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.button}
            onClick={clickHome}
            color="inherit"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TweetApp
          </Typography>
          <Button
            className={classes.button}
            onClick={clickUserList}
            color="inherit"
            variant="text"
          >
            User List
          </Button>
          {loggedin ? (
            <div>
              <UserImage user={user} onClick={handleMenu} />
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem disabled color="default">
                  <Typography variant="h6" color="primary">
                    <b>{user.name}</b>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => {clickProfile(user.id); handleClose();}}>Profile</MenuItem>
                <MenuItem onClick={() => {clickLogout(); handleClose();}}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit" onClick={clickLogin}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
