import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  firstname: Yup.string()
    .trim()
    .max(50, 'Debe contener 50 caracteres o menos')
    .ensure()
    .required('Requerido'),
  lastname: Yup.string()
    .trim()
    .max(50, 'Debe contener 50 caracteres o menos')
    .ensure()
    .required('Requerido'),
  email: Yup.string()
    .trim()
    .lowercase()
    .email('Correo invalido')
    .required('Requerido'),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'La contraseña debe contener minimo 8 caracteres, una minuscula, una mayuscula y un número'
    )
    .required('Contraseña es requerido'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Requerido'),
});
