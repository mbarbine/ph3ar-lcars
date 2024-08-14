<template>
  <button 
    :class="[buttonClass, customClass]" 
    @click="emitClick" 
    :aria-label="ariaLabel"
    :title="title">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

// Define Props
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  customClass: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: 'Button',
  },
  title: {
    type: String,
    default: '',
  },
});

// Emit Events
const emit = defineEmits(['click']);

// Computed Class
const buttonClass = computed(() => {
  return `lcars-button lcars-bg-${props.variant} lcars-rounded lcars-padding`;
});

// Handle Click
const emitClick = () => {
  emit('click');
};
</script>

<style lang="postcss" scoped>
@import '~@vue/cli-plugin-generate-stylelint-config';

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
