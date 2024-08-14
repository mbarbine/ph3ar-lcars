import { describe, it, expect } from 'vitest';
import { useApiKey } from '~/composables/useApiKey';

describe('useApiKey', () => {
  it('should return the correct API key', () => {
    const apiKey = useApiKey();
    expect(apiKey).toBe(process.env.NUXT_API_KEY);
  });
});
