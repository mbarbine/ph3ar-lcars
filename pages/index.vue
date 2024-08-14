<template>
  <div class="lcars-page">
    <!-- Page Content -->
  </div>
</template>

<script setup>
import { useSeo } from '~/plugins/seo';
import { onMounted } from 'vue';

const metaData = {
  title: 'Your Page Title',
  description: 'Your Page Description',
};

const seo = useSeo();

onMounted(() => {
  seo.setMeta(metaData.title, metaData.description);
});
</script>

<style scoped>
/* Your styles here */
</style>
