<template>
    <div class="lcars-auth-page">
      <LcarsHeader title="Register" />
      <LcarsForm @submit="handleRegister">
        <LcarsInput v-model="username" placeholder="Username" />
        <LcarsInput v-model="email" type="email" placeholder="Email" />
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
  const email = ref('');
  const password = ref('');
  const { login } = useAuth();
  
  const handleRegister = () => {
    // Registration logic
    console.log('Registered with:', { username: username.value, email: email.value, password: password.value });
  };
  </script>
  
  <style scoped>
  .lcars-auth-page {
    @apply p-8 bg-darkBg text-white;
  }
  </style>
  