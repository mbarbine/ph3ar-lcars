<template>
  <input
    :class="inputClass"
    v-bind="$attrs"
    v-on="listeners"
  />
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});
</script>

const inputClass = computed(() => {
  return `lcars-input lcars-bg-${props.variant} lcars-rounded lcars-padding`;
});
</script>

<style scoped lang="scss">
.lcars-input {
  font-size: 1rem; /* Equivalent to 'text-lg' */
  transition: color 0.2s ease-in-out; /* Equivalent to 'transition-colors' */
}

.lcars-bg-primary {
  background-color: var(--lcars-primary, #ff9933);
  color: white;
}

.lcars-bg-secondary {
  background-color: var(--lcars-secondary, #3366cc);
  color: white;
}

/* Add other necessary styles here */
</style>
