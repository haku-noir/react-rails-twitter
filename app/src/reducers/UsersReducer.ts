import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';

export type UserState = {
  id: number;
  name: string;
  email: string;
  image_name: string;
  profile: string;
  likes?: number[];
  followers?: number[];
  following_users?: number[];
};

export type PassUserState = UserState & {
  password: string;
};

export type ImageUserState = UserState & {
  image: File;
};

export type LoginUserState = {
  user?: UserState;
  loggedin: boolean;
}

export type UsersState = {
  loginUser: LoginUserState;
  showUser: UserState | null;
};

const initialState: UsersState = {
  loginUser: { loggedin: false },
  showUser: null,
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.login.async.done, (state: UsersState, payload): UsersState => {
    if (payload.result === undefined) return state;
    return {
      ...state,
      loginUser: {
        user: payload.result,
        loggedin: true,
      },
    };
  })
  .case(usersActions.logout.async.done, (state: UsersState): UsersState => ({
    ...state,
    loginUser: {
      loggedin: false,
    },
  }))
  .case(usersActions.addUser.async.done, (state: UsersState, payload): UsersState => ({
    ...state,
    loginUser: {
      user: payload.result,
      loggedin: true,
    },
  }))
  .case(usersActions.setShowUser.async.done, (state: UsersState, payload): UsersState => ({
    ...state,
    showUser: payload.result,
  }))
  .case(usersActions.setSessionUser.async.done, (state: UsersState, payload): UsersState => ({
    ...state,
    loginUser: payload.result,
  }));

export const findFollower = (users: UserState[], user: UserState): UserState[] => (
  users.filter((follower) => user.followers.find((follower_id) => follower_id === follower.id))
);

export const findFollowingUser = (users: UserState[], user: UserState): UserState[] => (
  users.filter((following_user) => user.following_users.find((following_user_id) => following_user_id === following_user.id))
);

export const isFollowerByUser = (follower: UserState, user: UserState): number => (
  follower.following_users.find((following_user) => following_user === user.id)
);
