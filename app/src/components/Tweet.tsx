import * as React from 'react';
import { TweetState } from 'reducers/tweetsReducer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export type TweetProps = {
  tweet: TweetState;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
    },
  }),
);

export const Tweet: React.FC<TweetProps> = (props: TweetProps) => {
  const { tweet } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Anonymous" src="" />
        }
        title="User"
        subheader={
          <Typography variant="body1" component="p">
            {tweet.content}
          </Typography>
        }
      />
    </Card>
  );
};
