import * as React from 'react';
import { size } from 'size';
import { TweetState } from 'reducers/tweetsReducer';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Tweet } from 'containers/Tweet';

export type TweetListStateAsProps = {
  tweets: TweetState[];
};

export type TweetListDispatchAsProps = {};

type IProps = TweetListStateAsProps & TweetListDispatchAsProps;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: size.width,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const { tweets } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {tweets.map((tweet) => (
          <ListItem key={tweet.id} alignItems="flex-start">
            <Tweet tweet={tweet} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
