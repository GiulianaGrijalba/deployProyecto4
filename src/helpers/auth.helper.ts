import { ILoginProps, IRegisterProps } from "@/types";
import toast from "react-hot-toast"; // Asegurarnos de que se usa toast

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Verificamos si la respuesta fue exitosa
    if (response.ok) {
      const data = await response.json();
      toast.success("Registrado exitosamente");
      return { success: true, data };  // Retornamos el resultado exitoso
    } else {
      const errorResponse = await response.json();
      // Mostramos el mensaje de error si la respuesta del backend no es OK
      toast.error(errorResponse.message || "Hubo un error en el registro");
      return { success: false, message: errorResponse.message || "Error desconocido" };
    }
  } catch (error: any) {
    // Si ocurre un error en el fetch o en la red, lo manejamos aquí
    toast.error("Hubo un error en la conexión con el servidor");
    return { success: false, message: error.message || "Error de red" };
  }
}

export async function login(userData: ILoginProps) {
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json()
        toast.success("Inicio de sesión exitoso");
        
        return { success: true, data }; // Regresamos los datos si todo es exitoso
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falla en el inicio de sesión');
      }
    } catch (error: any) {
      toast.error(error.message || "Hubo un error en el inicio de sesión");
      return { success: false, message: error.message || "Error de red" }; // Retornamos el error
    }
  }









