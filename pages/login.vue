<template>
    <div class="lcars-auth-page">
      <LcarsHeader title="Login" />
      <LcarsForm @submit="handleLogin">
        <LcarsInput v-model="username" placeholder="Username" />
        <LcarsInput v-model="password" type="password" placeholder="Password" />
      </LcarsForm>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
  import LcarsForm from '~/components/molecules/LcarsForm.vue';
  import LcarsInput from '~/components/atoms/LcarsInput.vue';
  import { useAuth } from '~/composables/useAuth.js';
  
  const username = ref('');
  const password = ref('');
  const { login } = useAuth();
  
  const handleLogin = () => {
    login({ username: username.value, password: password.value });
  };
  </script>
  
  <style scoped>
  .lcars-auth-page {
    @apply p-8 bg-darkBg text-white;
  }
  </style>
  