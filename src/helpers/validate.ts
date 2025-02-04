import { ILoginProps, ILoginPropsErrors } from '../types/index' 
import { IRegisterProps, IRegisterPropsErrors } from '../types/index'


export const validateLogin = (values: ILoginProps): ILoginPropsErrors => {
  const errors: ILoginPropsErrors = {};

  if (!values.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  return errors;
};


export const validateRegister = (values: IRegisterProps): IRegisterPropsErrors => {
  const errors: IRegisterPropsErrors = {};

  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }

  if (!values.email) {
    errors.email = 'El correo electrónico es requerido';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'El correo electrónico no es válido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  } else if (values.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  if (!values.address) {
    errors.address = 'La dirección es requerida';
  }

  if (!values.phone) {
    errors.phone = 'El teléfono es requerido';
  } else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = 'El teléfono debe tener 10 dígitos';
  }
  

  return errors;
};















