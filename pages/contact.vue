<template>
    <div class="lcars-page">
      <LcarsHeader title="Contact Us" />
      <img src="/images/example.jpg" alt="Example Image" class="lcars-img" />
      <p>Feel free to reach out to us with any questions or concerns.</p>
    </div>
  </template>
  
  <script setup>
  import LcarsHeader from '~/components/molecules/LcarsHeader.vue';
  </script>
  
  <style scoped>
  .lcars-page {
    padding: 2rem;
    background-color: #333333;
    color: #ffffff;
  }
  
  .lcars-img {
    max-width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  </style>
  