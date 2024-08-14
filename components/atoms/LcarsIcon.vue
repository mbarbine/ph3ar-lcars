<template>
  <svg
    :class="iconClass"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    role="img"
    :aria-label="ariaLabel"
  >
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
    default: 'lcarsAccent', // This should be a valid Tailwind color class or your custom class
  },
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
  ariaLabel: {
    type: String,
    default: 'icon',
  },
});

// Ensure that Tailwind CSS is used appropriately
const iconClass = computed(() => {
  return `lcars-icon w-${props.size} h-${props.size} text-${props.color}`;
});
</script>

<style scoped>
@import 'postcss-apply';

.lcars-icon {
  @apply fill-current; /* Apply current color to the SVG fill */
}
</style>
