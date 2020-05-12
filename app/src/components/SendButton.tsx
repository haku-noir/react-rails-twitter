import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { FormDialog, FormDialogParams } from './FormDialog';

export type SendButtonStateAsProps = {
  dialogParams: FormDialogParams;
};

export type SendButtonDispatchAsProps = {
  send: (text: string) => void;
};

type IProps = SendButtonStateAsProps & SendButtonDispatchAsProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

export const SendButton: React.FC<IProps> = (props: IProps) => {
  const { send, dialogParams } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Fab color="primary" aria-label="send" className={classes.fab} onClick={() => setOpen(true)}>
        <SendIcon />
      </Fab>
      <FormDialog open={open} setOpen={setOpen} send={send} params={dialogParams} />
    </div>
  );
};
