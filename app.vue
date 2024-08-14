<template>
  <NuxtLayout>
    <div :class="['lcars-app', themeClass]">
      <!-- LCARS Header -->
      <LcarsHeader title="LCARS App" />

      <!-- Main Layout with Sidebar and Content -->
      <div class="lcars-main">
        <LcarsSidebar />
        <div class="lcars-content">
          <NuxtPage />
        </div>
      </div>

      <!-- LCARS Footer -->
      <LcarsFooter />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme';
import { onMounted, ref } from 'vue';
import LcarsHeader from '~/components/molecules/LcarsHeader.vue'; // Using LcarsHeader from molecules
import LcarsSidebar from '~/components/organisms/LcarsSidebar.vue';
import LcarsFooter from '~/components/organisms/LcarsFooter.vue';

// Setup theme management
const { theme, setTheme } = useTheme();
const themeClass = ref('');

// Apply the selected theme on component mount
onMounted(() => {
  themeClass.value = theme.value;
  setTheme(theme.value); // Apply the current theme on load

  // Example: Automatic theme switching based on time of day
  const currentHour = new Date().getHours();
  if (currentHour > 18 || currentHour < 6) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});
</script>

<style scoped>
/* Base layout styles */
.lcars-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--lcars-bg-dark);
  color: var(--lcars-accent);
}

.lcars-main {
  display: flex;
  flex: 1;
}

.lcars-content {
  flex: 1;
  padding: 8px;
  overflow: auto;
  background-color: var(--lcars-bg-light);
}

/* LCARS-specific color scheme */
:root {
  --lcars-primary: #ff9933;
  --lcars-secondary: #3366cc;
  --lcars-accent: #ffcc33;
  --lcars-bg-dark: #000000;
  --lcars-bg-light: #ffffff;
}

/* Theme-based styles */
.dark .lcars-content {
  background-color: var(--lcars-bg-dark);
  color: var(--lcars-accent);
}

.light .lcars-content {
  background-color: var(--lcars-bg-light);
  color: var(--lcars-primary);
}
</style>
