export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('auth', {
      isAuthenticated: false,
      login(credentials) {
        // Handle authentication logic
        console.log('Logging in with', credentials);
        this.isAuthenticated = true;
      },
      logout() {
        // Handle logout logic
        console.log('Logging out');
        this.isAuthenticated = false;
      },
    });
  });
  