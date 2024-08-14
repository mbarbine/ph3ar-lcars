<template>
  <div :class="notificationClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value),
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const notificationClass = computed(() => {
  return [
    'lcars-notification',
    `lcars-bg-${props.variant}`,
    props.isVisible ? 'lcars-fade-in' : 'hidden',
  ];
});
</script>

<style scoped>
.lcars-notification {
  /* Add individual CSS properties instead of using @apply */
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.lcars-fade-in {
  /* Add individual CSS properties instead of using @apply */
  transition-property: opacity;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  opacity: 1;
}

.hidden {
  /* Add individual CSS properties instead of using @apply */
  opacity: 0;
}
</style>
