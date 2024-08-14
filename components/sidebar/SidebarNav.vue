<template>
  <nav :class="navClass">
    <slot></slot>
  </nav>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const navClass = computed(() => {
  return `lcars-navbar lcars-bg-${props.variant}`;
});
</script>

<style scoped>
.lcars-navbar {
  padding: 10px;
  color: #fff;
  text-align: center;
  background-color: var(--lcars-primary);
}
</style>
