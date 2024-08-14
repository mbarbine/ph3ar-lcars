<template>
  <div 
    v-draggable
    :style="{ top: `${initialY}px`, left: `${initialX}px` }"
    class="lcars-draggable lcars-panel"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  initialX: {
    type: Number,
    default: 0,
  },
  initialY: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
.lcars-draggable {
  position: absolute;
  cursor: move;
  transition: transform 0.2s;
}

.lcars-panel {
  /* Add specific styles for the LCARS panel, such as background, borders, padding */
  background-color: var(--lcars-primary, #ff9933);
  padding: 1rem;
  border-radius: 4px;
  border: 2px solid var(--lcars-accent, #ffcc33);
}
</style>
