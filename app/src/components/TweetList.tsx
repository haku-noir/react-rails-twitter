import * as React from 'react';
import { TweetsState } from 'reducers/tweetsReducer';
import { Tweet } from 'components/Tweet';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
export type TweetListStateAsProps = TweetsState;

export type TweetListDispatchAsProps = {};

type IProps = TweetListStateAsProps & TweetListDispatchAsProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const { tweets } = props;
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {tweets.map(tweet => (
        <Tweet tweet={tweet} classes={classes} key={tweet.id} />
      ))}
    </List>
  );
};
