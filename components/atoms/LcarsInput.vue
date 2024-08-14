<template>
  <input
    :class="inputClass"
    v-bind="$attrs"
    v-on="listeners"
  />
</template>

<script setup>
import { computed, defineProps } from 'vue';

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
@use 'sass:meta';

.lcars-input {
  @include meta.load-css('text-lg');
  @include meta.load-css('transition-colors');
  @include meta.load-css('lcars-fade-in');
}

.lcars-bg-primary {
  @include meta.load-css('bg-lcarsPrimary');
  @include meta.load-css('text-white');
}

.lcars-bg-secondary {
  @include meta.load-css('bg-lcarsSecondary');
  @include meta.load-css('text-white');
}
</style>
