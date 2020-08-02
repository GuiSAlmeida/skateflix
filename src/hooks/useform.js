import { useState } from 'react';

const useForm = (initialValues) => {
  const [category, setCategory] = useState(initialValues);

  const setValues = (key, value) => {
    setCategory({
      ...category,
      [key]: value,
    });
  };

  const handleValues = (e) => {
    setValues(
      e.target.getAttribute('name'),
      e.target.value,
    );
  };

  const clearForm = () => {
    setCategory(initialValues);
  };

  return {
    category,
    handleValues,
    clearForm,
  };
};

export default useForm;
