import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export type TweetFormDialogStateAsProps = {};

export type TweetFormDialogDispatchAsProps = {};

export type TweetFormDialogOwnProps = {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
};

type IProps = TweetFormDialogStateAsProps & TweetFormDialogDispatchAsProps & TweetFormDialogOwnProps;

export const TweetFormDialog: React.FC<IProps> = (props: IProps) => {
  const {open, setOpen} = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Send tweet</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Tweet"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};
