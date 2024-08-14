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
</style>
  