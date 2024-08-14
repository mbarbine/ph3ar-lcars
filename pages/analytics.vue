<template>
  <div class="lcars-page">
    <LcarsHeader title="User Analytics" />
    <LcarsChart />
    <LcarsGrid />
  </div>
</template>

<script setup>
import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
import LcarsChart from '~/components/organisms/LcarsChart.vue';
import LcarsGrid from '~/components/organisms/LcarsGrid.vue';
</script>

<style scoped>
.lcars-page {
  padding: 8px;
  background-color: var(--darkBg);
  color: white;
}
</style>
