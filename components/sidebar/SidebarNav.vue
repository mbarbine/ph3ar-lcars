<template>
  <nav :class="navClass">
    <slot></slot>
  </nav>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const navClass = computed(() => {
  return `sidebar-nav lcars-bg-${props.variant}`;
});
</script>

<style scoped>
.sidebar-nav {
  padding: 10px;
  font-size: 1.2rem;
  background-color: var(--lcarsPrimary);
}
</style>
