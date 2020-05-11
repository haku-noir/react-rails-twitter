import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { TweetFormDialog } from 'containers/TweetFormDialog';

export type TweetSendButtonProps = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

export const TweetSendButton: React.FC<TweetSendButtonProps> = (props: TweetSendButtonProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Fab color="primary" aria-label="send" className={classes.fab} onClick={handleClickOpen}>
        <SendIcon />
      </Fab>
      <TweetFormDialog open={open} setOpen={setOpen} />
    </div>
  );
};
