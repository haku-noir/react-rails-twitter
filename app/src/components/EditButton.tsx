import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { FormDialog, FormDialogParams } from './FormDialog';

export type EditButtonStateAsProps = {
  dialogParams: FormDialogParams;
};

export type EditButtonDispatchAsProps = {
  edit: (text: string) => void;
};

type IProps = EditButtonStateAsProps & EditButtonDispatchAsProps;

export const EditButton: React.FC<IProps> = (props: IProps) => {
  const { edit, dialogParams } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton aria-label="edit" color="primary" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <FormDialog open={open} setOpen={setOpen} send={edit} params={dialogParams} />
    </div>
  );
};
