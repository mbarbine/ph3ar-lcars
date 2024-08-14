<template>
    <div class="lcars-auth-layout">
      <LcarsHeader title="Authentication" />
      <div class="lcars-auth-content">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script setup>
  import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
  </script>
  
  <style scoped>
  .lcars-auth-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--color-dark-bg);
    color: var(--color-accent);
  }
  
  .lcars-auth-content {
    --bg-lcarsSecondary: #your-color-here;
    padding: 8px;
    border-radius: 12px;
    background-color: var(--bg-lcarsSecondary);
    width: 100%;
    max-width: 400px;
  }
  </style>
  