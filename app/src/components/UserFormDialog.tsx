import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export type UserFormDialogParams = {
  title: string;
  label1: string;
  default1: string;
  label2: string;
  default2: string;
  button: string;
};

type IProps = {
  send: (text: string, file: File, profile: string) => void;
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  params: UserFormDialogParams;
};

export const UserFormDialog: React.FC<IProps> = (props: IProps) => {
  const { send, open, setOpen, params } = props;
  const [text, updateText] = React.useState(params.default1);
  const [file, updateFile] = React.useState(null);
  const [profile, updateProfile] = React.useState(params.default2);

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
          label={params.label1}
          defaultValue={params.default1}
          fullWidth
          onChange={(event) => updateText(String(event.target.value))}
        />
        <Button variant="contained" component="label">
          Upload Avater
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => updateFile(event.target.files.item(0))}
          />
        </Button>
        <TextField
          margin="dense"
          label={params.label2}
          defaultValue={params.default2}
          fullWidth
          onChange={(event) => updateProfile(String(event.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {send(text, file, profile); handleClose();}} color="primary">
          {params.button}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
