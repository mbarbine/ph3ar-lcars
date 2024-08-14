<template>
  <div :class="['lcars-app', themeClass]">
    <!-- LCARS Header -->
    <LcarsHeader :title="t('appTitle')" />

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
</template>

<script setup>
import { useTheme } from '~/composables/useTheme';
import { useI18n } from '~/composables/useI18n';
import { onMounted, ref } from 'vue';
import LcarsHeader from '~/components/organisms/LcarsHeader.vue';
import LcarsSidebar from '~/components/organisms/LcarsSidebar.vue';
import LcarsFooter from '~/components/organisms/LcarsFooter.vue';

// Setup internationalization and theme management
const { t } = useI18n();
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
  @apply flex flex-col min-h-screen bg-darkBg text-white;
}

.lcars-main {
  @apply flex flex-1;
}

.lcars-content {
  @apply flex-1 p-8 overflow-auto bg-lightBg;
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
