<template>
    <div class="lcars-page">
      <LcarsHeader title="Page Not Found" />
      <p>The page you are looking for does not exist.</p>
    </div>
  </template>
  
  <script setup>
  import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
  </script>
  
  <style scoped>
  .lcars-page {
    @apply p-8 bg-darkBg text-white;
  }
  </style>
  