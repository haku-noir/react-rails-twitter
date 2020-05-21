import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { UserState } from 'reducers/usersReducer';

export type UserImageProps = {
  user: UserState;
  onClick?: (event: React.MouseEvent) => void;
};

export const UserImage: React.FC<UserImageProps> = (props: UserImageProps) => {
  const { user, onClick } = props;

  return (
    <Avatar
      alt={user.name}
      src={`http://localhost/user_images/${user.image_name}`}
      onClick={(event: React.MouseEvent) => onClick(event)}
    />
  );
};
