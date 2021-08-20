import { Field, FieldAttributes } from 'formik';

interface FormFieldProps {
  label: JSX.Element;
  errorMessage?;
  name: string;
}

export const FormField: React.FC<FormFieldProps & FieldAttributes<unknown>> = ({
  label,
  errorMessage,
  ...props
}) => {
  return (
    <>
      {label}
      <Field {...props} />
      {errorMessage}
    </>
  );
};
