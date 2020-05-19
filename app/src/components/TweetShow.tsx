import * as React from 'react';
import { size } from 'size';
import { TweetState } from 'reducers/tweetsReducer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { TweetEditButton } from 'containers/TweetEditButton';
import { TweetDeleteButton } from 'containers/TweetDeleteButton';
import { UserImage } from './UserImage';

export type TweetShowStateAsProps = {
  tweet: TweetState
};

export type TweetShowDispatchAsProps = {
  clickUser: (id: number) => void;
};

type IProps = TweetShowStateAsProps & TweetShowDispatchAsProps;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: size.width,
    },
  }),
);

export const TweetShow: React.FC<IProps> = (props: IProps) => {
  const { tweet, clickUser } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <UserImage
            user={tweet.user}
            onClick={(event: React.MouseEvent) => {clickUser(tweet.user.id); event.stopPropagation();}}
          />
        }
        title={
          <Typography component="a" onClick={() => clickUser(tweet.user.id)}>
            {tweet.user.name}
          </Typography>
        }
        subheader={tweet.time}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {tweet.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="favorite">
          <FavoriteIcon />
        </IconButton>
        <div style={{marginLeft: 'auto'}}>
          <TweetEditButton tweet={tweet} />
          <TweetDeleteButton id={tweet.id} />
        </div>
      </CardActions>
    </Card>
  );
};
