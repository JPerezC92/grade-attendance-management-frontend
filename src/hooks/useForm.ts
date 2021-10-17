import { useState } from 'react';

interface UseFormResult<FormValues> {
  formValues: FormValues;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | unknown>
  ) => void;
  handleSetValue: (key: string, value: string) => void;
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

  const handleSetValue = (key: string, value: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return { formValues, handleInputChange, handleSetValue, reset };
};
