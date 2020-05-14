import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export type UserFormParams = {
  title: string;
  buttonL: string;
  buttonR: string;
};

export type UserFormStateAsProps = {
  params: UserFormParams;
};

export type UserFormDispatchAsProps = {};

type IProps = UserFormStateAsProps & UserFormDispatchAsProps;

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

export const UserForm: React.FC<IProps> = (props: IProps) => {
  const { params } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={params.title} />
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
          {params.buttonL}
        </Button>
        <div style={{marginLeft: 'auto'}}>
          <Button color="primary">
            {params.buttonR}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};
