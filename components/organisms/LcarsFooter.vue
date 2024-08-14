<template>
    <footer :class="footerClass">
      <slot></slot>
    </footer>
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
    },
  });
  
  const footerClass = computed(() => {
    return `lcars-footer lcars-bg-${props.variant}`;
  });
  </script>
  
  <style scoped>
  @import 'assets/css/lcars.css';
  
  .lcars-bg-primary {
    background-color: var(--lcarsPrimary);
  }
  
  .lcars-footer {
    font-size: 1.5rem;
    padding: 10px;
    text-align: center;
    border-top-width: 2px;
    border-color: var(--lcarsAccent);
  }
  
  :root {
    --lcarsAccent: #000000;
    --lcarsPrimary: #FF9933; /* Example LCARS primary color */
  }
  </style>
  