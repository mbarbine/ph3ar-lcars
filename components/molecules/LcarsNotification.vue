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
  @apply p-4 rounded-lg mb-4;
}

.lcars-fade-in {
  @apply transition-opacity duration-300 ease-in-out opacity-100;
}

.hidden {
  @apply opacity-0;
}
</style>
