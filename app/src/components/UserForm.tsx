import * as React from 'react';
import { size } from 'size';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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

export type UserFormDispatchAsProps = {
  clickL: () => void;
  clickR: (user: string, password: string) => void;
};

type IProps = UserFormStateAsProps & UserFormDispatchAsProps;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: size.width,
    },
    field: {
      width: '100%',
      marginTop: 10,
    }
  }),
);

export const UserForm: React.FC<IProps> = (props: IProps) => {
  const { params, clickL, clickR } = props;
  const [user, updateUser] = React.useState('');
  const [password, updatePassword] = React.useState('');
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={params.title} />
      <CardContent>
        <TextField
          className={classes.field}
          label="User"
          variant="outlined"
          onChange={(event) => updateUser(String(event.target.value))}
        />
        <TextField
            className={classes.field}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(event) => updatePassword(String(event.target.value))}
          />
      </CardContent>
      <CardActions disableSpacing>
        <Button color="secondary" onClick={() => clickL()}>
          {params.buttonL}
        </Button>
        <div style={{marginLeft: 'auto'}}>
          <Button color="primary" onClick={() => clickR(user, password)}>
            {params.buttonR}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};
