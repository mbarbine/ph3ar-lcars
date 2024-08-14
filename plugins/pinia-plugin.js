import { PiniaPluginContext } from 'pinia';

export default function (context) {
  const { store } = context;
  store.$subscribe(() => {
    console.log(`State changed in ${store.$id}`);
  });
}
