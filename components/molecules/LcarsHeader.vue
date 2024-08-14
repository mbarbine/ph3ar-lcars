<template>
    <header :class="headerClass">
      <slot></slot>
    </header>
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue'; // Import defineProps
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
    },
  });
  
  const headerClass = computed(() => {
    return `lcars-header lcars-bg-${props.variant}`;
  });
  </script>
  
  <style scoped>
  /* Add the missing @import statement */
  @import 'path/to/lcars.css';
  
  /* Add the missing .lcars-bg-primary class */
  .lcars-bg-primary {
    /* Add the desired styles */
  }
  
  /* Add the missing .lcars-fade-in class */
  .lcars-fade-in {
    /* Add the desired styles */
  }
  
  /* Add the missing .border-lcarsAccent class */
  .border-lcarsAccent {
    /* Add the desired styles */
  }
  
  .lcars-header {
    /* Add the desired styles */
    @apply text-2xl p-4 mb-4 border-b-2 border-lcarsAccent lcars-fade-in;
  }
  </style>
  