import { useNotificationStore } from '~/stores/notification';

export function useNotification() {
  const notificationStore = useNotificationStore();

  const addNotification = (message, variant = 'primary') => {
    notificationStore.addNotification({ message, variant });
  };

  const removeNotification = (id) => {
    notificationStore.removeNotification(id);
  };

  const notifications = computed(() => notificationStore.notifications);

  return { addNotification, removeNotification, notifications };
}
