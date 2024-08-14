<template>
    <div class="notification-list">
      <LcarsNotification v-for="(notification, index) in notifications" :key="index" :variant="notification.variant" :isVisible="true">
        {{ notification.message }}
      </LcarsNotification>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import LcarsNotification from '~/components/molecules/LcarsNotification.vue';
  
  const notifications = ref([
    { message: 'First notification', variant: 'primary' },
    { message: 'Second notification', variant: 'secondary' },
    // Add more notifications as needed
  ]);
  </script>
  
  <style scoped>
  .notification-list {
    /* @apply space-y-2; */
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  </style>
  