<template>
  <input
    :class="inputClass"
    v-bind="$attrs"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const inputClass = computed(() => {
  return `lcars-input lcars-bg-${props.variant} lcars-rounded lcars-padding`;
});
</script>

<style scoped lang="scss">
@import "/assets/styles/variables.scss";

.lcars-input {
  font-size: 1.5rem;
  transition: color 0.3s;
  animation: fade-in 0.5s;
}

.lcars-bg-primary {
  background-color: $lcarsPrimary;
  color: white;
}

.lcars-bg-secondary {
  background-color: $lcarsSecondary;
  color: white;
}
</style>
