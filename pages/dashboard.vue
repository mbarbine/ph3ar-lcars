<template>
    <div class="lcars-page">
      <LcarsHeader title="Dashboard" />
      <p>Welcome to your dashboard. Here you can view your data and manage your account.</p>
      <LcarsGrid />
    </div>
  </template>
  
  <script setup>
  import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
  import LcarsGrid from '~/components/organisms/LcarsGrid.vue';
  </script>
  
  <style scoped>
  .lcars-page {
    padding: 2rem;
    background-color: var(--darkBg);
    color: white;
  }
  </style>
  