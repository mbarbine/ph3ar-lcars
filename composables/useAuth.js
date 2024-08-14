import { useAuthStore } from '~/stores/auth';

export function useAuth() {
  const authStore = useAuthStore();
  
  const login = async (credentials) => {
    return authStore.login(credentials);
  };
  
  const logout = () => {
    return authStore.logout();
  };
  
  const isAuthenticated = computed(() => authStore.isAuthenticated);

  return { login, logout, isAuthenticated };
}
