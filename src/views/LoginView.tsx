'use client'
import React from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { ILoginProps } from '../types/index'
import { login } from '../helpers/auth.helper' 
import { useAuth } from '@/context/AuthContext'
import Cookies  from 'js-cookie';

const LoginView = () => {
  const { setUserData, userData } = useAuth();  
  const router = useRouter(); 

  const formik = useFormik<ILoginProps>({
    initialValues: { email: '', password: '' },
    validateOnBlur: true, 
    onSubmit: async (values) => {
      const response = await login(values); 

      if (response.success) {
        const { user, token } = response.data; 
        setUserData(user, token);
        Cookies.set("userData", JSON.stringify({token:response.data.token, user: response.data.user}))
        router.push('/') 
      } 
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          <button 
            type="submit" 
            className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;











