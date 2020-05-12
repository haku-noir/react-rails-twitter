import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export type FormDialogParams = {
  title: string;
  label: string;
  button: string;
  default: string;
};

export type FormDialogProps = {
  send: (text: string) => void;
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  params: FormDialogParams;
};

export const FormDialog: React.FC<FormDialogProps> = (props: FormDialogProps) => {
  const { send, open, setOpen, params } = props;
  const [text, updateText] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{params.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={params.label}
          defaultValue={params.default}
          fullWidth
          onChange={(event) => updateText(String(event.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {send(text); handleClose();}} color="primary">
          {params.button}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
