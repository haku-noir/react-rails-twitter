import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export type DeleteButtonStateAsProps = {
  isVisible: boolean;
};

export type DeleteButtonDispatchAsProps = {
  destroy: () => void;
};

type IProps = DeleteButtonStateAsProps & DeleteButtonDispatchAsProps;

export const DeleteButton: React.FC<IProps> = (props: IProps) => {
  const { isVisible, destroy } = props;

  return (
    <div style={{ display: isVisible ? 'inline' : 'none' }}>
      <IconButton aria-label="destroy" color="secondary" onClick={() => destroy()}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
