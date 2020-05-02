import * as React from 'react';

export type TweetStateAsProps = {};

export type TweetDispatchAsProps = {};

type IProps = TweetStateAsProps & TweetDispatchAsProps;

export const Tweet: React.FC<IProps> = (props: IProps) => {
  return (
    <div></div>
  );
};
