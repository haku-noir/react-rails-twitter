import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export type DeleteButtonStateAsProps = {};

export type DeleteButtonDispatchAsProps = {
  destroy: (id: number) => void;
};

type DeleteButtonOwnProps = {
  id: number;
};

type IProps = DeleteButtonStateAsProps & DeleteButtonDispatchAsProps & DeleteButtonOwnProps;

export const DeleteButton: React.FC<IProps> = (props: IProps) => {
  const { destroy, id } = props;

  return (
    <IconButton aria-label="destroy" color="secondary" onClick={() => destroy(id)}>
      <DeleteIcon />
    </IconButton>
  );
};
