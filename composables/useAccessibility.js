export function useAccessibility() {
    const setFocus = (elementRef) => {
      if (elementRef && elementRef.value) {
        elementRef.value.focus();
      }
    };
  
    const handleKeyNavigation = (event, nextElementRef, previousElementRef) => {
      if (event.key === 'ArrowDown' && nextElementRef && nextElementRef.value) {
        nextElementRef.value.focus();
      }
      if (event.key === 'ArrowUp' && previousElementRef && previousElementRef.value) {
        previousElementRef.value.focus();
      }
    };
  
    return { setFocus, handleKeyNavigation };
  }
  