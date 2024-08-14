<template>
    <header :class="headerClass">
      <slot></slot>
    </header>
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
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
  @import 'assets/css/lcars.css';
  
  .lcars-bg-primary {
    background-color: var(--lcarsPrimary);
  }
  
  .lcars-fade-in {
    animation: fade-in 1s;
  }
  
  .border-lcarsAccent {
    border-color: var(--lcarsAccent);
  }
  
  .lcars-header {
    font-size: 2rem;
    padding: 4px;
    margin-bottom: 4px;
    border-bottom-width: 2px;
    border-color: var(--lcarsAccent);
    animation: fade-in 1s;
  }
  
  :root {
    --lcarsAccent: #000000;
    --lcarsPrimary: #FF9933; /* Example LCARS primary color */
  }
  </style>
  