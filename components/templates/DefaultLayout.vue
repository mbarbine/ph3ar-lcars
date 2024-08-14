<template>
    <div class="lcars-layout">
      <LcarsSidebar />
      <main class="lcars-main-content">
        <NuxtPage />
      </main>
    </div>
  </template>
  
  <script setup>
  import LcarsSidebar from '~/components/organisms/LcarsSidebar.vue';
  </script>
  
  <style scoped>
  .lcars-layout {
    display: flex;
    min-height: 100vh;
  }
  
  .lcars-main-content {
    flex-grow: 1;
    padding: 2rem;
    background-color: var(--color-dark-bg);
  }
  </style>
  