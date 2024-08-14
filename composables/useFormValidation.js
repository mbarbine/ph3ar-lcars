import { ref, computed } from 'vue';

export function useFormValidation(fields) {
  const errors = ref({});
  
  const validateField = (fieldName, value) => {
    if (!value || value.trim() === '') {
      errors.value[fieldName] = `${fieldName} is required.`;
    } else {
      delete errors.value[fieldName];
    }
  };

  const validateForm = () => {
    Object.keys(fields).forEach((fieldName) => {
      validateField(fieldName, fields[fieldName].value);
    });
    return Object.keys(errors.value).length === 0;
  };

  return { errors, validateField, validateForm };
}
