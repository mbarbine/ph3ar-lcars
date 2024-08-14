<template>
    <div class="lcars-page">
      <LcarsHeader title="About Us" />
      <p>Learn more about our LCARS-themed application and its features.</p>
    </div>
  </template>
  
  <script setup>
  import LcarsHeader from '@/components/molecules/LcarsHeader.vue';
  </script>
  
  <style scoped>
  .lcars-page {
    @apply p-8 bg-darkBg text-white;
  }
  </style>
  