import { useState } from 'react';

interface UseFormResult<FormValues> {
  formValues: FormValues;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  reset: (newFormState?: FormValues) => void;
}

interface UseForm {
  <FormValues = Record<string, unknown>>(values: FormValues): UseFormResult<
    FormValues
  >;
}

export const useForm: UseForm = (values) => {
  const [formValues, setFormValues] = useState(values);

  const reset = (newFormState = values) => {
    setFormValues(() => newFormState);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return { formValues, handleInputChange, reset };
};
