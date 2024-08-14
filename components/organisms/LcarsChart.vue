<template>
    <div class="lcars-panel lcars-fade-in">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { Chart } from 'chart.js';
  
  const chartCanvas = ref(null);
  
  onMounted(() => {
    const ctx = chartCanvas.value.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sample Data',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  });
  </script>
  
  <style scoped>
  .lcars-panel {
    background-color: var(--lcarsPrimary);
    color: white;
    border-radius: 4px;
    padding: 4px;
  }
  </style>
  