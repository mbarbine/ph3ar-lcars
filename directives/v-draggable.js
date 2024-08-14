export default {
  mounted(el) {
    el.style.position = 'absolute';

    const onMouseDown = (e) => {
      const offsetX = e.clientX - el.getBoundingClientRect().left;
      const offsetY = e.clientY - el.getBoundingClientRect().top;

      const onMouseMove = (e) => {
        el.style.left = `${e.clientX - offsetX}px`;
        el.style.top = `${e.clientY - offsetY}px`;
      };

      document.addEventListener('mousemove', onMouseMove);

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
      }, { once: true });
    };

    el.addEventListener('mousedown', onMouseDown);
  },
};
