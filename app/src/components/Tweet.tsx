import * as React from 'react';
import { TweetState } from 'reducers/tweetsReducer';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export type TweetStateAsProps = {
  tweet: TweetState;
};

export type TweetDispatchAsProps = {
  clickCard: (id: number) => void;
  clickUserName: (id: number) => void;
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
  const { tweet, clickCard, clickUserName } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => clickCard(tweet.id)}>
      <CardHeader
        avatar={
          <Avatar alt={tweet.user.name} src={`http://localhost/user_images/${tweet.user.image_name}`} />
        }
        title={
          <Typography component="a" onClick={(event: React.MouseEvent) => {clickUserName(tweet.user.id); event.stopPropagation();}}>
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
