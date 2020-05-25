import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { FormDialog, FormDialogParams } from './FormDialog';

export type EditButtonStateAsProps = {
  dialogParams: FormDialogParams;
  isVisible: boolean;
};

export type EditButtonDispatchAsProps = {
  edit: (text: string) => void;
};

type IProps = EditButtonStateAsProps & EditButtonDispatchAsProps;

export const EditButton: React.FC<IProps> = (props: IProps) => {
  const { isVisible, dialogParams, edit } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{display: isVisible ? "inline" : "none"}}>
      <IconButton aria-label="edit" color="primary" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <FormDialog open={open} setOpen={setOpen} send={edit} params={dialogParams} />
    </div>
  );
};
