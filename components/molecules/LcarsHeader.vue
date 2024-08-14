<template>
    <header :class="headerClass">
      <slot></slot>
    </header>
  </template>
  
  <script setup>
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
  @import 'assets/css/lcars.css';
  
  /* Add the missing .lcars-bg-primary class */
  .lcars-bg-primary {
    /* Add the desired styles */
    background-color: primary;
  }
  
  /* Add the missing .lcars-fade-in class */
  .lcars-fade-in {
    /* Add the desired styles */
    animation: fade-in 1s;
  }
  
  /* Add the missing .border-lcarsAccent class */
  .border-lcarsAccent {
    /* Add the desired styles */
    border-color: lcarsAccent;
  }
  
  .lcars-header {
      /* Add the desired styles */
      font-size: 2rem;
      padding: 4px;
      margin-bottom: 4px;
      border-bottom-width: 2px;
      border-color: var(--lcarsAccent); /* Use the defined lcarsAccent color */
      animation: fade-in 1s;
  }
  
  /* Define the missing lcarsAccent color */
  :root {
    --lcarsAccent: #000000;
  }
  </style>
  