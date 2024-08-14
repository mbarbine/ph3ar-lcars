<template>
  <form @submit.prevent="handleSubmit" :class="formClass">
    <slot></slot>
    <LcarsButton type="submit" variant="primary">Submit</LcarsButton>
  </form>
</template>

<script setup>
import { computed } from 'vue';
import LcarsButton from '@/components/atoms/LcarsButton.vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const formClass = computed(() => {
  return `lcars-form lcars-bg-${props.variant} lcars-rounded lcars-padding`;
});

const handleSubmit = () => {
  console.log('Form submitted');
};
</script>

<style scoped>
.lcars-form {
  margin-top: 1rem;
  margin-bottom: 1rem;
  animation: slide-in 0.3s ease-in-out;
}

@keyframes slide-in {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
