<template>
  <nav :class="navbarClass" aria-label="Main Navigation">
    <slot></slot>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'dark', 'light'].includes(value),
  },
});

const navbarClass = computed(() => {
  return `lcars-navbar lcars-bg-${props.variant}`;
});
</script>

<style scoped>
.lcars-navbar {
  padding: 4px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lcars-bg-primary {
  background-color: var(--bg-lcarsPrimary);
}

.lcars-bg-secondary {
  background-color: var(--bg-lcarsSecondary);
}

.lcars-bg-dark {
  background-color: var(--bg-lcarsDark);
}

.lcars-bg-light {
  background-color: var(--bg-lcarsLight);
}
</style>
