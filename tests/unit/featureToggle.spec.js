import { describe, it, expect } from 'vitest';
import { useFeatureToggle } from '~/composables/useFeatureToggle';

describe('useFeatureToggle', () => {
  it('should toggle features on and off', () => {
    const { isFeatureEnabled, toggleFeature } = useFeatureToggle();
    expect(isFeatureEnabled.value).toBe(false);
    toggleFeature();
    expect(isFeatureEnabled.value).toBe(true);
  });
});
