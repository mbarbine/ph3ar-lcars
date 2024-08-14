<template>
    <div class="lcars-dashboard-layout">
      <LcarsNavbar />
      <div class="lcars-dashboard-content">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script setup>
  import LcarsNavbar from '~/components/organisms/LcarsNavbar.vue';
  </script>
  
  <style scoped>
  .lcars-dashboard-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .lcars-dashboard-content {
    flex-grow: 1;
    padding: 2rem;
    background-color: var(--color-dark-bg);
    color: var(--color-accent);
  }
  </style>
  