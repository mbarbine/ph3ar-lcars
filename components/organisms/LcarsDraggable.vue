<template>
    <div v-draggable class="lcars-draggable lcars-panel">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    initialX: {
      type: Number,
      default: 0,
    },
    initialY: {
      type: Number,
      default: 0,
    },
  });
  </script>
  
  <style scoped>
  .lcars-draggable {
    position: absolute;
    top: var(--initialY);
    left: var(--initialX);
    cursor: move;
    transition: transform 0.2s;
  }
  
  .lcars-panel {
    /* Define the missing lcars-panel class styles here */
  }
  </style>
  