<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const buttonClass = computed(() => {
  return `lcars-button lcars-bg-${props.variant} lcars-rounded lcars-padding`;
});

const handleClick = () => {
  console.log('Button clicked');
};
</script>

<style scoped>
.lcars-button {
  @apply text-lg transition-colors lcars-fade-in;
}

.lcars-bg-primary {
  @apply bg-lcarsPrimary text-white hover:bg-lcarsHighlight;
}

.lcars-bg-secondary {
  @apply bg-lcarsSecondary text-white hover:bg-lcarsHighlight;
}
</style>
