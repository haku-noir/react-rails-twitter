import * as React from 'react';
import { size } from 'size';
import { TweetState, checkTweetByUserLikes } from 'reducers/tweetsReducer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { TweetEditButton } from 'containers/TweetEditButton';
import { TweetDeleteButton } from 'containers/TweetDeleteButton';
import { UserState, LoginUserState } from 'reducers/usersReducer';
import { UserImage } from './UserImage';

export type TweetShowStateAsProps = {
  tweet: TweetState,
  loginUser: LoginUserState
};

export type TweetShowDispatchAsProps = {
  clickUser: (id: number) => void;
  clickLike: (user: UserState, tweet: TweetState) => void;
};

type IProps = TweetShowStateAsProps & TweetShowDispatchAsProps;

const useStyles = makeStyles(() => createStyles({
  root: {
    width: size.width,
  },
}));

export const TweetShow: React.FC<IProps> = (props: IProps) => {
  const {
    tweet, loginUser, clickUser, clickLike,
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <UserImage
            user={tweet.user}
            onClick={(event: React.MouseEvent) => { clickUser(tweet.user.id); event.stopPropagation(); }}
          />
        )}
        title={(
          <Typography component="a" onClick={() => clickUser(tweet.user.id)}>
            {tweet.user.name}
          </Typography>
        )}
        subheader={tweet.time}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {tweet.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {loginUser.loggedin ? (
          <div>
            <IconButton onClick={() => clickLike(loginUser.user, tweet)}>
              <FavoriteIcon color={checkTweetByUserLikes(tweet, loginUser.user) ? 'secondary' : 'inherit'} />
            </IconButton>
            <Typography component="span">
              {tweet.likes_count}
            </Typography>
          </div>
        ) : (<div />)}
        <div style={{ marginLeft: 'auto' }}>
          <TweetEditButton tweet={tweet} />
          <TweetDeleteButton tweet={tweet} />
        </div>
      </CardActions>
    </Card>
  );
};
