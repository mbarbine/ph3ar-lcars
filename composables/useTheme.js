export function useTheme() {
    const toggleTheme = () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
    };
  
    const currentTheme = computed(() => document.body.getAttribute('data-theme'));
  
    return { toggleTheme, currentTheme };
  }
  