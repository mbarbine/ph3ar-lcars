import { defineNuxtPlugin } from '#app';
import { init } from '@vercel/analytics';

export default defineNuxtPlugin(() => {
  init();
});
