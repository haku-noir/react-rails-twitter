import * as React from 'react';
import { TweetsState, TweetState } from 'reducers/tweetsReducer';
import { Tweet } from 'components/Tweet';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { TweetForm } from 'containers/TweetForm';

export type TweetListStateAsProps = TweetsState;

export type TweetListDispatchAsProps = {
  repeat: () => void
};

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
  const { tweets, repeat } = props;
  const classes = useStyles();
  setTimeout(() => repeat(), 5000);

  return (
    <div>
      <TweetForm />
      <List className={classes.root}>
        {tweets.map(tweet => (
          <ListItem key={tweet.id} alignItems="flex-start">
            <Tweet tweet={tweet} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
