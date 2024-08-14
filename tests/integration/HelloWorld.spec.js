import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '~/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('should render the correct message', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain('Hello World');
  });
});
