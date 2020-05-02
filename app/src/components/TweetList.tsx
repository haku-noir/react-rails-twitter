import * as React from 'react';
import { TweetsState } from 'reducers/tweetsReducer';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
        <div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Anonymous" src="" />
            </ListItemAvatar>
            <ListItemText
              primary={tweet}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Anonymous
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
};
