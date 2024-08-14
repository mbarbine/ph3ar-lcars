<template>
  <div :class="sidebarClass">
    <LcarsHeader title="Navigation" />
    <SidebarNav />
    <SidebarFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
import SidebarNav from '~/components/Sidebar/SidebarNav.vue';
import SidebarFooter from '~/components/Sidebar/SidebarFooter.vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const sidebarClass = computed(() => {
  return `lcars-bg-${props.variant} lcars-rounded lcars-padding`;
});
</script>

<style scoped>
.lcars-sidebar {
  height: 100%;
  width: 64px;
  display: flex;
  flex-direction: column;
  animation: slide-in;
}
</style>
