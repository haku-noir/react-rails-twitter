import * as React from 'react';

export type TweetListStateAsProps = {};

export type TweetListDispatchAsProps = {};

type IProps = TweetListStateAsProps & TweetListDispatchAsProps;

export const TweetList: React.FC<IProps> = (props: IProps) => {
  return (
    <div></div>
  );
};
