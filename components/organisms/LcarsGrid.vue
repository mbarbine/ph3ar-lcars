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
  @apply bg-lcarsPrimary text-white rounded p-4 lcars-pulse;
}
</style>
