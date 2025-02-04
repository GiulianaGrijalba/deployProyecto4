import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(token: string, products: number[]) {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({products}),
    })
    toast.success("Compra realizada")
    return response.json();
}catch (error: any) {
    toast.error("No se pudo realizar la compra")

    throw new Error(error)
}
};
   

export async function getOrders(token: string) {
  try {
    const response = await fetch(`${API_URL}/users/orders`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": token
      },
  
    })
    // toast.success("Compra realizada")
    return response.json();
}catch (error: any) {
    toast.error("Ocurrio un error")
    throw new Error(error)
}
};
   
