import { describe, it, expect } from 'vitest';
import { useApi } from '~/composables/useApi';

describe('useApi', () => {
  it('should fetch data from the API', async () => {
    const { data } = useApi('/api/hello');
    expect(data.value.message).toBe('Hello from the server!');
  });
});
