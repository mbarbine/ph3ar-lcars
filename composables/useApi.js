import { useFetch } from '@nuxtjs/composition-api';

export function useApi(url, options = {}) {
  const { data, error } = useFetch(url, options);
  return { data, error };
}
