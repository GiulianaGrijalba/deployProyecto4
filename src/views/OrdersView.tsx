'use client'

import { useAuth } from '@/context/AuthContext';
import { getOrders } from '@/helpers/orders.helper';
import { IOrder } from '@/types';
import React, { useEffect, useState } from 'react';

const OrdersView = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const handleGetOrder = async () => {
    if (!token) return;
    const response = await getOrders(token);
    setOrders(response);
  };

  useEffect(() => {
    handleGetOrder();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">📦 Tus Órdenes</h1>

        {orders.length ? (
          orders.map((order) => (
            <div key={order.id} className="mb-6 border border-gray-300 p-5 rounded-lg shadow-md bg-gray-50">
              <p className="text-lg font-bold text-gray-900 mb-2">🆔 Orden N° {order.id}</p>
              <p className="text-gray-800 font-medium">
                Estado: <span className="text-blue-600">{order.status.toLocaleUpperCase()}</span>
              </p>
              <p className="text-gray-600">📅 Fecha: {new Date(order.date).toLocaleDateString()}</p>

              <div className="mt-4">
                <h2 className="text-gray-700 font-semibold mb-3">🛍️ Productos:</h2>
                <div className="space-y-2">
                  {order.products.map((product) => (
                    <div key={product.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
                      <p className="text-gray-700">{product.name}</p>
                      <p className="text-green-600 font-semibold">${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 text-lg mt-6">🚫 No tienes órdenes aún.</div>
        )}
      </div>
    </div>
  );
};

export default OrdersView;



