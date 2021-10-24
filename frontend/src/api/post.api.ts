import { useQuery } from 'react-query';
import { Fetch } from '../utils/fetcher.utils';
import { Post } from 'p7_types';
import { TError } from '../types';

export function usePosts() {
  return useQuery<Post[], TError>(['post'], () => Fetch.get<Post[]>('post'));
}
