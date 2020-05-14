import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export type UserLoginFormStateAsProps = {};

export type UserLoginFormDispatchAsProps = {};

type IProps = UserLoginFormStateAsProps & UserLoginFormDispatchAsProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
    },
    field: {
      width: '100%',
      marginTop: 10,
    }
  }),
);

export const UserLoginForm: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField className={classes.field} label="User" variant="outlined" />
        <TextField
            className={classes.field}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
      </CardContent>
      <CardActions disableSpacing>
        <Button color="secondary">
          Register
        </Button>
        <div style={{marginLeft: 'auto'}}>
          <Button color="primary">
            Login
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};
