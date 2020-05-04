import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import { TweetsState } from 'reducers/tweetsReducer';

const baseURL = 'localhost';

const instance: AxiosInstance = Axios.create({
  baseURL,
  timeout: 1000,
});

export const fetchPosts = (
  params = {},
  cancelToken: CancelToken = null,
): Promise<AxiosResponse<{tweets: TweetsState}>> => (
  instance.get('/posts', { params, cancelToken })
);
