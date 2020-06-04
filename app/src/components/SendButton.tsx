import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { FormDialog, FormDialogParams } from './FormDialog';

export type SendButtonStateAsProps = {
  dialogParams: FormDialogParams;
  isVisible: boolean;
};

export type SendButtonDispatchAsProps = {
  send: (text: string) => void;
};

type IProps = SendButtonStateAsProps & SendButtonDispatchAsProps;

const useStyles = makeStyles((theme: Theme) => createStyles({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export const SendButton: React.FC<IProps> = (props: IProps) => {
  const { isVisible, dialogParams, send } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <div style={{ display: isVisible ? 'inline' : 'none' }}>
      <Fab color="primary" aria-label="send" className={classes.fab} onClick={() => setOpen(true)}>
        <SendIcon />
      </Fab>
      <FormDialog open={open} setOpen={setOpen} send={send} params={dialogParams} />
    </div>
  );
};
