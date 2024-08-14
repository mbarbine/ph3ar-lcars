<template>
    <footer class="sidebar-footer">
      <!-- Add footer content here -->
      <slot></slot>
    </footer>
  </template>
  
  <script setup>
  // You can add any necessary logic here
  </script>
  
  <style scoped>
  .sidebar-footer {
    padding: 10px;
    background-color: var(--lcarsAccent);
    color: #fff;
    text-align: center;
  }
  </style>
  