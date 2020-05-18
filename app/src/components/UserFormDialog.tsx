import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormDialogParams } from './FormDialog';

type IProps = {
  send: (text: string, file: File) => void;
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  params: FormDialogParams;
};

export const UserFormDialog: React.FC<IProps> = (props: IProps) => {
  const { send, open, setOpen, params } = props;
  const [text, updateText] = React.useState('');
  const [file, updateFile] = React.useState(null);

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
        <Button variant="contained" component="label">
          Upload Image
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => updateFile(event.target.files.item(0))}
          />
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {send(text, file); handleClose();}} color="primary">
          {params.button}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
