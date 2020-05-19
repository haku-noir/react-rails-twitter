import * as React from 'react';
import { TweetState } from 'reducers/tweetsReducer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { UserImage } from './UserImage';

export type TweetStateAsProps = {
  tweet: TweetState;
};

export type TweetDispatchAsProps = {
  clickCard: (id: number) => void;
  clickUser: (id: number) => void;
};

type IProps = TweetStateAsProps & TweetDispatchAsProps;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

export const Tweet: React.FC<IProps> = (props: IProps) => {
  const { tweet, clickCard, clickUser } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => clickCard(tweet.id)}>
      <CardHeader
        avatar={
          <UserImage
            user={tweet.user}
            onClick={(event: React.MouseEvent) => {clickUser(tweet.user.id); event.stopPropagation();}}
          />
        }
        title={
          <Typography component="a" onClick={(event: React.MouseEvent) => {clickUser(tweet.user.id); event.stopPropagation();}}>
            {tweet.user.name}
          </Typography>
        }
        subheader={
          <Typography variant="body1" component="p">
            {tweet.content}
          </Typography>
        }
      />
    </Card>
  );
};
