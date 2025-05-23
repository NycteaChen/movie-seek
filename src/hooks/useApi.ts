'use client';
import useSWR from 'swr';
import axios from '@/lib/axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useApi(endpoint: string) {
  const { data, error, isLoading } = useSWR(endpoint, fetcher, {
    revalidateOnFocus: false
  });

  return { data, error, isLoading };
}
