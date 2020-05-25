import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { UserFormDialog } from './UserFormDialog';
import { FormDialogParams } from './FormDialog';

export type UserEditButtonStateAsProps = {
  dialogParams: FormDialogParams;
  isVisible: boolean;
};

export type UserEditButtonDispatchAsProps = {
  edit: (text: string, file:File) => void;
};

type IProps = UserEditButtonStateAsProps & UserEditButtonDispatchAsProps;

export const UserEditButton: React.FC<IProps> = (props: IProps) => {
  const { isVisible, dialogParams, edit } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{display: isVisible ? "inline" : "none"}}>
      <IconButton aria-label="edit" color="primary" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <UserFormDialog open={open} setOpen={setOpen} send={edit} params={dialogParams} />
    </div>
  );
};
