'use client';
import useSWR from 'swr';
import axios from '@/lib/axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useGet = <T>(endpoint: string | null) => {
  const { data, error, isLoading } = useSWR<T>(endpoint, fetcher, {
    revalidateOnFocus: false
  });

  return { data, error, isLoading };
};
