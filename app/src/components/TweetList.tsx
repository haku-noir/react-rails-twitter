import * as React from 'react';
import { TweetsState } from 'reducers/tweetsReducer';

export type TweetListStateAsProps = TweetsState;

export type TweetListDispatchAsProps = {};

type IProps = TweetListStateAsProps & TweetListDispatchAsProps;

export const TweetList: React.FC<IProps> = (props: IProps) => {
  const { tweets } = props;

  return (
    <div>
      <h1>TweetList</h1>
      <ul>
        {tweets.map(tweet => (
          <p>{tweet}</p>
        ))}
      </ul>
    </div>
  );
};
