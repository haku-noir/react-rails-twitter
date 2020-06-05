import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { ErrorState } from 'reducers/errorReducer';
import { size } from 'size';

export type ErrorAlertStateAsProps = {
  error: ErrorState;
};

export type ErrorAlertDispatchAsProps = {
  clickClose: () => void;
};

type IProps = ErrorAlertStateAsProps & ErrorAlertDispatchAsProps;

const useStyles = makeStyles(() => createStyles({
  root: {
    width: size.width * 1.2,
  },
}));

export const ErrorAlert: React.FC<IProps> = (props: IProps) => {
  const { error, clickClose } = props;
  const classes = useStyles();

  return (
    <Collapse className={classes.root} in={error.isError}>
      <Alert
        severity="error"
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={clickClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        )}
      >
        {error.message}
      </Alert>
    </Collapse>
  );
};
