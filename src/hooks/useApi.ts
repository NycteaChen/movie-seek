'use client';
import useSWR from 'swr';
import axios from '@/lib/axios';
import { useState } from 'react';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useGet = <T>(endpoint: string | null) => {
  const { data, error, isLoading } = useSWR<T>(endpoint, fetcher, {
    revalidateOnFocus: false
  });

  return { data, error, isLoading };
};

type UsePostResult<TResponse> = {
  data: TResponse | null;
  error: Error | null;
  isLoading: boolean;
  post: (body?: Record<string, unknown>) => Promise<void>;
};

export const usePost = <TResponse = unknown>(endpoint: string): UsePostResult<TResponse> => {
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const post = async (body?: Record<string, unknown>) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post<TResponse>(endpoint, body);
      setData(response.data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, post };
};
