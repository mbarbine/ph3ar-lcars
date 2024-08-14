export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
    console.error('Error:', err);
    console.info('Error Info:', info);
    // Optionally report the error to an external service
  };

  nuxtApp.vueApp.config.warnHandler = (msg, vm, trace) => {
    console.warn('Warning:', msg);
    console.info('Trace:', trace);
  };
});










   
