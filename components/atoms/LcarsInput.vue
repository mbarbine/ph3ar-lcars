<template>
    <input
      :class="inputClass"
      v-bind="$attrs"
      v-on="listeners"
    />
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
    },
  });
  
  const inputClass = computed(() => {
    return `lcars-input lcars-bg-${props.variant} lcars-rounded lcars-padding`;
  });
  </script>
  
  <style scoped>
  @import 'tailwindcss/apply';
  @import 'tailwindcss/plugins';
  
  .lcars-input {
    @apply text-lg transition-colors lcars-fade-in;
  }
  
  .lcars-bg-primary {
    @apply bg-lcarsPrimary text-white;
  }
  
  .lcars-bg-secondary {
    @apply bg-lcarsSecondary text-white;
  }
  </style>
  