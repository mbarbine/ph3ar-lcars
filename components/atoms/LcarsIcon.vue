<template>
    <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <slot></slot>
    </svg>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    size: {
      type: String,
      default: '24',
    },
    color: {
      type: String,
      default: 'lcarsAccent',
    },
  });
  
  // Import the necessary styles
  import '@/assets/css/lcars.css';
  
  const iconClass = computed(() => {
    return `lcars-icon w-${props.size} h-${props.size} text-${props.color}`;
  });
  </script>
  
  <style scoped>
  .lcars-icon {
    /* Define the lcarsAccent class */
    @apply lcarsAccent fill-current;
  }
  </style>
  