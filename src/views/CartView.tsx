'use client'
import { IProduct } from '@/types'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';

const CartView = () => {
    const {token} = useAuth();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        const storedCart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if (storedCart) {
            let totalCart = 0;
            storedCart?.map((product) => {
                totalCart = totalCart + product.price 
            })
            setTotal(totalCart)
            setCart(storedCart)
        }
    }, [])

    const handleCheckout = async() => {
        const idProducts = cart?.map((product) => product.id);
        await createOrder(token!, idProducts);
        localStorage.setItem("cart", "[]")
        setCart([])
        setTotal(0)
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">🛒 Tu Carrito</h1>

            <div className="space-y-4">
                {cart.length > 0 ? (cart.map((product) => {
                    return (
                        <div key={product.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                            <p className="text-gray-700">{product.name}</p>
                            <p className="text-green-600 font-semibold">${product.price}</p>
                        </div>
                    )
                })) : (<p>Todavia no hay productos en tu carrito</p>)}
            </div>

            <div className="mt-6 border-t pt-4">
                <p className="text-lg font-bold text-gray-800">Total: <span className="text-green-600">${total}</span></p>    
              
                <button 
                onClick={handleCheckout} className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"> 
                Finalizar compra
                </button>

            </div>    
        </div>
    </div>
  )
}

export default CartView;

