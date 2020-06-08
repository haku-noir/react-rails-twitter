import * as React from 'react';
import { size } from 'size';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export type UserRegisterFormParams = {
  title: string;
  buttonL: string;
  buttonR: string;
};

export type UserRegisterFormStateAsProps = {
  params: UserRegisterFormParams;
};

export type UserRegisterFormDispatchAsProps = {
  clickL: () => void;
  clickR: (name: string, email: string, password: string) => void;
};

type IProps = UserRegisterFormStateAsProps & UserRegisterFormDispatchAsProps;

const useStyles = makeStyles(() => createStyles({
  root: {
    width: size.width,
  },
  field: {
    width: '100%',
    marginTop: 10,
  },
}));

export const UserRegisterForm: React.FC<IProps> = (props: IProps) => {
  const { params, clickL, clickR } = props;
  const [name, updateName] = React.useState('');
  const [email, updateEmail] = React.useState('');
  const [password, updatePassword] = React.useState('');
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={params.title} />
      <CardContent>
        <TextField
          className={classes.field}
          label="User Name"
          variant="outlined"
          onChange={(event) => updateName(String(event.target.value))}
        />
        <TextField
          className={classes.field}
          label="Email"
          variant="outlined"
          onChange={(event) => updateEmail(String(event.target.value))}
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
        <div style={{ marginLeft: 'auto' }}>
          <Button color="primary" onClick={() => clickR(name, email, password)}>
            {params.buttonR}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};
