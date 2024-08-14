<template>
    <nav class="lcars-navbar">
      <slot></slot>
    </nav>
  </template>
  
  <script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
    },
  });
  </script>
  
  <style scoped>
  .lcars-navbar {
    background-color: var(--bg-lcarsSecondary);
    padding: 4px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  </style>
  