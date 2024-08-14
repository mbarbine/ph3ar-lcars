<template>
  <div class="lcars-page">
    <LcarsHeader :title="t('homeTitle')" />
    <p>{{ t('homeWelcome') }}</p>
    <LcarsButton @click="handleClick">Click Me</LcarsButton>
  </div>
</template>

<script setup>
import { useSeo } from '~/plugins/seo';
import { useI18n } from '~/composables/useI18n';
import { onMounted } from 'vue';
import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
import LcarsButton from '~/components/atoms/LcarsButton.vue';

const { t } = useI18n();
const { setMeta } = useSeo();

const handleClick = () => {
  alert('Button clicked!');
};

onMounted(() => {
  setMeta(t('homeMetaTitle'), t('homeMetaDescription'));
});
</script>

<style scoped>
.lcars-page {
  @apply p-8 bg-darkBg text-white;
}
</style>
