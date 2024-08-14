export default defineNuxtMiddleware((context) => {
    const { $auth } = context.app;
  
    if ($auth.isAuthenticated) {
      return context.redirect('/dashboard');
    }
  });
  