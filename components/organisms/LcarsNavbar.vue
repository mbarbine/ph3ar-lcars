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
    @apply bg-lcarsSecondary p-4 text-white flex items-center justify-between;
  }
  </style>
  