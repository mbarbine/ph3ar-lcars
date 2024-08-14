import { defineStore } from 'pinia';

export const useAnalyticsStore = defineStore('analytics', {
  state: () => ({
    events: [],
  }),
  actions: {
    trackEvent(eventName, data) {
      this.events.push({ eventName, data });
    },
  },
});
