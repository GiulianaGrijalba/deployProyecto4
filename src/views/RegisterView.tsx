'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useRouter } from 'next/navigation';
import { validateRegister } from '../helpers/validate';
import Link from 'next/link';
import { IRegisterProps, IRegisterPropsErrors } from '../types';
import { register } from '@/helpers/auth.helper';

const RegisterView = () => {
  const router = useRouter();

  return (
    <Formik<IRegisterProps, IRegisterPropsErrors>
      initialValues={{ email: '', password: '', name: '', address: '', phone: '' }}
      validate={validateRegister}
      onSubmit={async (values, { resetForm }) => {
        const result = await register(values);

        if (result.success) {
          resetForm(); // Limpiamos el formulario
          router.push('/login'); // Redirigimos al login después del registro exitoso
        } else {
          // Si el registro no fue exitoso, ya mostramos un toast en el helper
          // Aquí podríamos manejar algún mensaje adicional si lo necesitamos
        }
      }}
    >
      {() => (
        <div className="min-h-screen flex items-center justify-center bg-white pt-32">
          <Form className="max-w-md mx-auto p-8 space-y-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-800">Crea tu Cuenta</h2>
            
            {['email', 'password', 'name', 'address', 'phone'].map((field) => (
              <div key={field}>
                <Field 
                  type={field === 'password' ? 'password' : 'text'} 
                  name={field} 
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                />
                <ErrorMessage name={field} component="div" className="mt-1 text-red-500 text-sm" />
              </div>
            ))}
            
            <button 
              type="submit" 
              className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Registrarse
            </button>
            
            <p className="text-center text-gray-600">
              ¿Ya tienes una cuenta? 
              <Link href="/login" className="text-blue-500 hover:underline"> Inicia sesión</Link>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterView;





