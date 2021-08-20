import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().trim().lowercase().email('Email es invalido'),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'La contraseña es de minimo 8 caracteres,1 mayuscula,1 minuscula,1 número'
    ),
});
