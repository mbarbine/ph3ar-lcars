<template>
  <div class="grid grid-cols-3 gap-4 lcars-fade-in">
    <div v-for="item in gridItems" :key="item.id" class="lcars-panel">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const gridItems = ref([
  { id: 1, title: 'Item 1', description: 'Description for item 1' },
  { id: 2, title: 'Item 2', description: 'Description for item 2' },
  { id: 3, title: 'Item 3', description: 'Description for item 3' },
  // Add more items as needed
]);
</script>

<style scoped>
.lcars-panel {
  background-color: var(--bg-lcarsPrimary);
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  animation: lcars-pulse 1s infinite;
}

@keyframes lcars-pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
