import * as React from 'react';
import { TweetState } from 'reducers/tweetsReducer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export type TweetProps = {
  tweet: TweetState;
  classes: Record<"inline" | "root", string>;
};

export const Tweet: React.FC<TweetProps> = (props: TweetProps) => {
  const { tweet, classes } = props;

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Anonymous" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={tweet.content}
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
  );
};
